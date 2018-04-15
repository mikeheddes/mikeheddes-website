const assert = require('assert');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

class MongoDB {
  constructor() {
  }

  connect(opts) {
    assert("database" in opts, "No database specified");
    this.database = opts.database;
    this.server = opts.server || '127.0.0.1:27017';
    return mongoose.connect(`mongodb://${this.server}/${this.database}`)
    .then(() => console.log("Connected with MongoDB"))
    .catch(err => {
      console.error(err.name + ': ' + err.message);
      process.exit();
    });
  }

  disconnect() {
    console.log("\nDisconnecting MongoDB\n");
    return mongoose.disconnect()
    .catch(err => console.error('Disconect error: ', err));
  }
}

module.exports = new MongoDB();
