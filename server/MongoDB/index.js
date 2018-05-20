const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class MongoDB {
  constructor() {
  }

  connect(opts) {
    assert("database" in opts, "No database specified");
    this.database = opts.database;
    this.server = process.env.MONGO_URL || opts.server || '127.0.0.1';
    this.port = process.env.MONGO_PORT || opts.port || "27017";
    return mongoose.connect(`mongodb://${this.server}:${this.port}/${this.database}`)
    .then(() => console.log("Connected with MongoDB"))
    .catch(err => {throw(err.name + ': ' + err.message)});
  }

  disconnect() {
    console.log("\nDisconnecting MongoDB\n");
    return mongoose.disconnect()
    .catch(err => console.error('Disconect error: ', err));
  }
}

module.exports = new MongoDB();
