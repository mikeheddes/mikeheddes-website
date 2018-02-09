const mongoose = require('mongoose');
const schemas = require('../schemas');

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  date: {
    type: Date,
    default: undefined
  },
  id: {
    type: mongoose.Schema.ObjectId,
    default: mongoose.Types.ObjectId(),
    index: true,
    unique: true
  },
  location: {
    city: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
  },
  actions: {
    type: [schemas.action],
    default: []
  },
  categorie: {
    type: String,
    enum: ['MUSIC', 'EDUCATION', 'BUSINESS']
  }
},{
  versionKey: 'v'
});

module.exports = mongoose.model('EventSchema', EventSchema);
