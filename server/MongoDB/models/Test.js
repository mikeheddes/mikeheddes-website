const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
});

TestSchema.pre('validate', function (next) {
  console.log(this);
  this._id = this.name.replace(/\s+/g, '');
  console.log(this);
  // this._id = new mongoose.mongo.ObjectId(this.NOT_id);
  // console.log(this.NOT_id, '\n', this._id);
  // delete this.id;
  next();
})

module.exports = mongoose.model('TestSchema', TestSchema);
