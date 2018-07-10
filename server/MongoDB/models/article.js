const mongoose = require('mongoose');
const imageModification = require('./imageModification');

const AchievementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
}, {_id: false});

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
  },
}, {_id: false});

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  authors: [AuthorSchema],
  tags: [String],
  body: String,
  publishStatus: {
    type: String,
    enum: ['DRAFT', 'PUBLIC', 'PRIVATE'],
    default: 'DRAFT',
  },
  publishedAt: {
    type: Date,
    default: Date.now(),
  },
  _id: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    enum: ['DAY', 'NIGHT'],
  },
  heroImage: {
    type: String,
    ref: 'image',
  },
  containedImages: [{
    type: String,
    ref: 'image',
  }],
  license: String,
  achievement: [AchievementSchema],
  categorie: {
    type: String,
    enum: ['DESIGN', 'CODE', 'TRAVEL'],
  },
}, {
  versionKey: 'v'
});

ArticleSchema.pre('validate', function (next) {
  this._id = this.title.toLowerCase().replace(/\W+/g, " ").trim().replace(/\s+/g, "_");
  next();
})

ArticleSchema.static('findWithImage', function (query, opts) {
  return this.find(query)
  .setOptions(opts)
  .populate('heroImage containedImages')
  .lean()
  .exec()
  .then(docs => {
    for (let i = 0; i < docs.length; i++) {
      docs[i].heroImage = imageModification(docs[i].heroImage);
      // docs[i].heroImage = imageModification(docs[i].heroImage);
    }
    return docs
  })
})



module.exports = mongoose.model('article', ArticleSchema);
