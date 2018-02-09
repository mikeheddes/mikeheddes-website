const mongoose = require('mongoose');
const schemas = require('../schemas');

// use to check for a url datatype
const mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);

const MusicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    default: 'Mike Heddes'
  },
  tracks: {
    type: [schemas.track],
    default: []
  },
  genre: {
    type: String,
    default: ''
  },
  pubDate: {
    type: Date,
    default: Date.now()
  },
  description: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    index: true,
    lowercase: true,
    unique: true
  },
  coverImageUrl: {
    type: mongoose.SchemaTypes.Url,
    default: ''
  },
  heroImageUrl: {
    type: mongoose.SchemaTypes.Url,
    default: ''
  },
  theme: {
    type: String,
    default: 'DAY',
    enum: ['DAY', 'NIGHT']
  },
  actions: {
    type: [schemas.action],
    default: []
  },
  achievement: {
    type: [schemas.achievement],
    default: []
  },
  categorie: {
    type: String,
    enum: ['PODCAST', 'SINGLE', 'ALBUM']
  },
  pLine: {
    type: String,
    default: ''
  }
}, {
  versionKey: 'v'
});

module.exports = mongoose.model('MusicSchema', MusicSchema);
