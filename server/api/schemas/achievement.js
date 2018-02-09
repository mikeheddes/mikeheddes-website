const mongoose = require('mongoose');

// use to check for a url datatype
const mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: mongoose.SchemaTypes.Url,
    default: ''
  }
}, {
  _id: false
});