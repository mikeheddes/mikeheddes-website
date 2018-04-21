const mongoose = require('mongoose');
const validator = require('validator');

const imageModification = require('./imageModification');
const colorValidator = {
  type: String,
  validate: v => (v === null || validator.isHexColor(v)),
};

const demensionSchema = new mongoose.Schema({
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
}, { _id: false });

const ImageSchema = new mongoose.Schema({
  upload: {
    name: {
      type: String,
      required: true,
    },
    mime: {
      type: String,
      validate: validator.isMimeType,
    },
    date: {
      type: Date,
      default: Date.now(),
      required: true,
    },
    fieldname: {
      type: String,
      required: true,
    },
    extension: {
      type: String,
      required: true,
      validate: v => (v.charAt(0) === "."),
    },
  },
  // updates: [{
  //   date: Date,
  //   changes: [{
  //     field: String,
  //     previousValue: String,
  //   }],
  // }],
  name: String,
  description: {
    type: String,
    default: '',
  },
  demensions: [demensionSchema],
  _id: {
    type: String,
    required: true,
  },
  color: {
    vibrant: colorValidator,
    lightVibrant: colorValidator,
    darkVibrant: colorValidator,
    muted: colorValidator,
    lightMuted: colorValidator,
    darkMuted: colorValidator,
  },
  // usedIn: [{
  //   contentType: String, // ['ARTICLE', 'MUSIC']
  //   contentId: String,
  // }],
  micro: {
    URI: {
      type: String,
      validate: validator.isDataURI,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
}, {
  versionKey: 'v'
});

ImageSchema.pre('validate', function (next) {
  this.name = this.name || this.upload.name;
  next();
})

ImageSchema.static('findByIdForItem', function (id) {
  return this.findById(id)
  .lean()
  .exec()
  .then(imageModification)
});

// ImageSchema.post('find', function (docs) {
//   // console.log(docs);
//   // await docs.toObject();
//
// })

// ImageSchema.method('clientItem', function () {
//   let out = this.toJSON();
//   if (out) {
//     out.srcSet = out.demensions.map(dim => `${SEcnf.publicPath}/${out._id}?width=${dim.width} ${dim.width}w`).join(',');
//     out.images = out.demensions.map(dim => Object.assign({}, dim, {path: SEcnf.publicPath + '/' + out._id + '?width=' + dim.width}));
//     out.src = SEcnf.publicPath + '/' + data._id;
//     out.placeholder = out.micro.URI;
//     delete out.micro;
//     delete out.upload;
//     delete out.demensions;
//   }
//   return out
// })

module.exports = mongoose.model('image', ImageSchema);
