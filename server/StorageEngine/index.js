const fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');
const mkdirp = require('mkdirp');
const sharp = require('sharp');
const Vibrant = require('node-vibrant');
const rimraf = require('rimraf');

const fileFilter = require('./fileFilter');
const config = require('./config');
const imageDB = require('../MongoDB/models/image');

class StorageEngine {
  constructor() {
    this.ratio = 0.625;
    this.bytes = 12;
    this.widths = [300, 600, 1200, 2000];
    this.micro = {
      width: 64,
      opts: { quality: 20 },
    };
    this.location = config.path;
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
    return format => {
      format = format ? `-${format}` : '';
      return path.join(location, fileId + format + ext)
    }
  }

  getFile(fileId, format) {
    const location = this._getLocation(fileId);
    const formatTag = format ? `-${format}` : '';
    let filename = `${fileId}${formatTag}.`;
    return new Promise((resolve, reject) => {
      fs.readdir(location, (err, files) => {
        if (err) reject(err);
        else {
          filename = files.filter(file => file.startsWith(filename)).join();
          const finalPath = path.join(location, filename);
          resolve(fs.createReadStream(finalPath));
        }
      })
    })
  }

  _createTransform(width, fileType, opts) {
    return sharp()
      .resize(width, Math.round(width * this.ratio))
      .min()
      .resize(width, Math.round(width * this.ratio))
      .crop()
      .toFormat(sharp.format[fileType], opts || {})
  }

  _getVibrant(buffer) {
    return Vibrant.from(buffer).getPalette()
    .then(palette => {
      let colors = {};
      for(let col in palette) {
        colors[col.charAt(0).toLowerCase() + col.substr(1)] = palette[col] ? palette[col].getHex() : null;
      }
      return colors;
    })
  }

  _storeOriginalImage(imageStream, createPath) {
    const finalPath = createPath();
    const writeStream = fs.createWriteStream(finalPath);
    imageStream.pipe(writeStream);
  }

  _storeMicroImage(width, imageStream, createPath, mime) {
    const finalPath = createPath(width);
    const fileType = path.extname(finalPath).substr(1);
    const transform = this._createTransform(width, fileType, this.micro.opts);
    const writeStream = fs.createWriteStream(finalPath);
    let chunks = [];
    transform.on('data', chunk => {
      chunks.push(chunk);
    })
    return new Promise((resolve, reject) => {
      transform.on('error', reject);
      transform.on('end', () => {
        const buf = Buffer.concat(chunks);
        this._getVibrant(buf)
        .then(colors => resolve([colors, `data:${mime};base64,${buf.toString('base64')}`]));
      });
      imageStream.pipe(transform).pipe(writeStream);
    });
  }

  _storeImageWidth(width, imageStream, createPath, opts) {
    const finalPath = createPath(width);
    const fileType = path.extname(finalPath).substr(1);
    const transform = this._createTransform(width, fileType, opts);
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

    this._createId((err, id) => {
      if (err) return cb(err);

      file.id = id;
      let callb = err => this._removeFile(req, file, () => cb(err));

      const destination = this._getLocation(id);

      mkdirp(destination, err => {
        if (err) return cb(err);

        const imageStream = file.stream;
        const originalExt = path.extname(file.originalname).toLowerCase();
        const makePath = this._makeFullPathFunc(destination, id, originalExt);

        imageStream.on('error', callb);

        this._storeMicroImage(this.micro.width, imageStream, makePath, file.mimetype)
        .then(([colors, dataURI]) => {
          imageDB.create({
            upload: {
              name: path.basename(file.originalname, originalExt),
              mime: file.mimetype,
              fieldname: file.fieldname,
              extension: originalExt,
            },
            _id: id,
            demensions: this.widths.map(width => ({
              height: Math.round(width * this.ratio),
              width,
            })),
            color: colors,
            micro: {
              URI: dataURI,
              width: this.micro.width,
              height: Math.round(this.micro.width * this.ratio),
            }
          })
          .then(() => cb(null, {
              id,
          })).catch(callb);
        }).catch(callb);

        this._storeOriginalImage(imageStream, makePath);
        this._storeImageWidths(this.widths, imageStream, makePath);
      })
    })
  }

  _removeFile(req, file, cb) {
    rimraf(path.resolve(this._getLocation(file.id), '../'), cb);
  }
}


module.exports = {
  storage: new StorageEngine(),
  fileFilter,
}
