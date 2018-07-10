const mongoose = require('mongoose');

const imageModification = require('./imageModification');

const TrackSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
    },
    duration: Number,
  },
  { _id: false },
);

const ExternalUrlSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const AchievementSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
  },
  { _id: false },
);

const MusicSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    tracks: [TrackSchema],
    genre: String,
    publishedAt: {
      type: Date,
      'default': Date.now(),
    },
    publishStatus: {
      type: String,
      'enum': ['DRAFT', 'PUBLIC', 'PRIVATE'],
      'default': 'DRAFT',
    },
    description: String,
    _id: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      ref: 'image',
      'default': null,
    },
    heroImage: {
      type: String,
      ref: 'image',
      'default': null,
    },
    theme: {
      type: String,
      'enum': ['DAY', 'NIGHT'],
    },
    externalUrls: [ExternalUrlSchema],
    achievement: [AchievementSchema],
    categorie: {
      type: String,
      'enum': ['PODCAST', 'SINGLE', 'ALBUM'],
    },
    license: String,
  },
  {
    versionKey: 'v',
  },
);

MusicSchema.pre('validate', function (next) {
  this._id = this.title
    .toLowerCase()
    .replace(/\W+/g, ' ')
    .trim()
    .replace(/\s+/g, '_');
  next();
});

// MusicSchema.pre('save', function (next) {
//   console.log(this.tracks.map(track => ({
//     ...track,
//     artist: track.artist || this.artist,
//   })));
//   // this.tracks = this.tracks.map(track => ({
//   //   ...track,
//   //   artist: track.artist || this.artist,
//   // }));
//   next();
// });

MusicSchema.static('findWithImage', function (query, opts) {
  return this.find(query)
    .setOptions(opts)
    .populate('coverImage heroImage')
    .lean()
    .exec()
    .then((docs) => {
      for (let i = 0; i < docs.length; i++) {
        docs[i].coverImage = imageModification(docs[i].coverImage);
        docs[i].heroImage = imageModification(docs[i].heroImage);
      }
      return docs;
    });
});

module.exports = mongoose.model('music', MusicSchema);
