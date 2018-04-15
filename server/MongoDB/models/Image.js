const mongoose = require('mongoose');
const validator = require('validator');

const ImageSchema = new mongoose.Schema({
  original: {
    name: {
      type: String,
    },
    MIME: {
      type: String,
    }
  },
  uploadDate: {
    type: Date,
    default: Date.now()
  },
  uploadUserId: {
    type: mongoose.Schema.Types.ObjectId
  },
  extension: {
    type: String,
  },
  widths: {
    type: [Number],
  },
  heights: {
    type: [Number],
  },
  // usedIn: {
  //
  // },
  micro: {
    URI: {
      type: String,
      // validator: isDataURI()
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    }
  }
});

ImageSchema.pre('save', function (next) {
  this._id = new mongoose.mongo.ObjectId(this.id);
  delete this.id;
  next();
})

module.exports = mongoose.model('ImageSchema', ImageSchema);
