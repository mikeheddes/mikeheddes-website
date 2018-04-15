const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const mkdirp = require('mkdirp');
const sharp = require('sharp');

const fileFilter = require('./fileFilter');

class StorageEngine {
  constructor() {
    this.ratio = 0.65;
    this.bytes = 12;
    this.widths = [300, 600, 1200, 2000];
    this.ext = '.jpg';
    this.micro = {
      width: 64,
      opts: { quality: 20 },
      ext: '.jpg',
    };
    this.location = path.join(process.cwd(), 'public', 'uploads');
    this.hexExp = /([A-Fa-f0-9]{2})/g;
  }

  _createId(cb) {
    crypto.randomBytes(this.bytes, (err, raw) => {
      err ? cb(err, undefined) : cb(null, raw.toString('hex'));
    })
  }

  isValidId(id) {
    const matches = id.match(this.hexExp);
    return matches.length === this.bytes;
  }

  _getLocation(fileId) {
    return path.join(
      this.location,
      fileId.slice(0,3),
      fileId
    );
  }

  _makeFullPathFunc(location, fileId, ext) {
    ext = ext ? ext : this.ext;
    return format => {
      format = format ? `-${format}` : '';
      return path.join(location, fileId + format + ext)
    }
  }

  getFile(fileId, format, ext) {
    const location = this._getLocation(fileId);
    const formatTag = format ? `-${format}` : '';
    const filename = `${fileId}${formatTag}.${ext}`;
    const finalPath = path.join(location, filename);
    return fs.createReadStream(finalPath);
  }

  _createTransform(width, opts) {
    return sharp()
      .resize(width, Math.round(width * this.ratio))
      .min()
      .resize(width, Math.round(width * this.ratio))
      .crop()
      .jpeg(opts || {})
  }

  _storeOriginalImage(imageStream, createPath) {
    const finalPath = createPath();
    const writeStream = fs.createWriteStream(finalPath);
    imageStream.pipe(writeStream);
  }

  _storeMicroImage(width, imageStream, createPath) {
    this._storeImageWidth(width, imageStream, createPath, this.micro.opts);
    const transform = this._createTransform(width, this.micro.opts);
    let chunks = [];
    transform.on('data', chunk => {
      chunks.push(chunk);
    })
    transform.on('end', () => {
      const buf = Buffer.concat(chunks);
      // console.log(buf.toString('base64'));
    })
    imageStream.pipe(transform);
  }

  _storeImageWidth(width, imageStream, createPath, opts) {
    const finalPath = createPath(width);
    const transform = this._createTransform(width, opts);
    const writeStream = fs.createWriteStream(finalPath);
    const transformPipe = imageStream.pipe(transform).pipe(writeStream);
  }

  _storeImageWidths(widths, imageStream, createPath) {
    widths.map(width => {
      const opts = width > 1000 ? {quality: 100} : {quality: 70};
      this._storeImageWidth(width, imageStream, createPath, opts);
    })
  }

  _handleFile(req, file, cb) {
    this._createId((err, fileId) => {
      if (err) return cb(err);

      const destination = this._getLocation(fileId);

      mkdirp(destination, err => {
        if (err) return cb(err);

        const imageStream = file.stream;
        const originalExt = path.extname(file.originalname);
        const makeFullPath = this._makeFullPathFunc(destination, fileId);
        const pathOriginal = this._makeFullPathFunc(destination, fileId, originalExt);

        imageStream.on('error', cb);
        imageStream.on('end', () => {
          cb(null, {
            location: destination,
            fileId,
            extension: this.ext,
            widths: this.widths,
          })
        })

        this._storeOriginalImage(imageStream, pathOriginal);
        this._storeMicroImage(this.micro.width, imageStream, makeFullPath);
        this._storeImageWidths(this.widths, imageStream, makeFullPath);
        })
      })
    }

  _removeFile(req, file, cb) {
    fs.rmdir(file.location, cb);
    console.log("FIRED: removeFile");
  }
}


module.exports = {
  storage: new StorageEngine(),
  fileFilter,
}
