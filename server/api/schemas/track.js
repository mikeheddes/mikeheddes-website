const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    required: true
  }
}, {
  _id: false
});
