const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  tracks: [{
    title: String,
    artist: String,
    duration: Number,
  }],
  genres: [String],
  url: String,
  publishedAt: Date,
  publishStatus: String,
  description: String,
  _id: String,
  coverImageId: String,
  heroImageId: String,
  theme: String, // ['DAY', 'NIGHT']
  externalUrls: [{
    service: String,
    url: String,
  }],
  achievement: [{
    name: String,
    url: String,
  }],
  categorie: String, // ['PODCAST', 'SINGLE', 'ALBUM']
  license: String,
}, {
  versionKey: 'v'
});

module.exports = mongoose.model('music', MusicSchema);
