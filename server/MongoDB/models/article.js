const mongoose = require('mongoose');

// USE https://github.com/Medium/medium-api-docs as example

const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  authors: [{
    // userId: String,
    name: String,
    link: String,
  }],
  tags: [String],
  url: String,
  content: String,
  publishStatus: String,
  publishedAt: Date,
  _id: String,
  theme: String, // ['DAY', 'NIGHT']
  heroImageId: String,
  containedImageIds: [String],
  license: String,
  achievement: [{
    name: String,
    url: String,
  }],
  categorie: String, // ['DESIGN', 'CODE', 'TRAVEL']
}, {
  versionKey: 'v'
});

module.exports = mongoose.model('article', ArticleSchema);
