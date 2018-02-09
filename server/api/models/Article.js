const mongoose = require('mongoose');
const schemas = require('../schemas');

// use to check for a url datatype
const mongooseTypes = require("mongoose-types");
mongooseTypes.loadTypes(mongoose);

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  authors: {
    type: [String],
    trim: true,
    default: ['Mike Heddes']
  },
  pubDate: {
    type: Date,
    default: Date.now()
  },
  body: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    lowercase: true,
    index: true,
    unique: true,
    required: true
  },
  theme: {
    type: String,
    default: 'DAY',
    enum: ['DAY', 'NIGHT']
  },
  heroImageUrl: {
    type: mongoose.SchemaTypes.Url,
    default: undefined
  },
  achievement: {
    type: [schemas.achievement],
    default: []
  },
  categorie: {
    type: String,
    enum: ['DESIGN', 'CODE', 'TRAVEL']
  }
}, {
  versionKey: 'v'
});

module.exports = mongoose.model('ArticleSchema', ArticleSchema);
