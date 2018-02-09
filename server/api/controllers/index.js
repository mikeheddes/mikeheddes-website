const models = require('../models');
const controllers = {
  music: require('./MusicController'),
  article: require('./ArticleController'),
  event: require('./EventController')
}

function getController(resource, callback) {
  if (!(resource in models)) {
    callback(`Invalid resource request: ${resource}`, null)
  } else {
    callback(null, models[resource])
  }
}

module.exports = {
  find: function(resource, params, callback) {
    let limit = Number(params.limit) || Number.MAX_SAFE_INTEGER;
    delete params.limit;
    if ('modifyParamsForFind' in controllers[resource]) {
      params = controllers[resource].modifyParamsForFind(params)
    }
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.find(params).sort({pubDate: -1}).limit(limit).exec((err, data) => {
        if (err) {
          callback(err, null);
          return;
        }
        if ('modifyDataForClient' in controllers[resource]) {
          data = data.map(
            dataPoint => controllers[resource].modifyDataForClient(dataPoint.toJSON())
          )
        }
        callback(err, data);
      })
    })
  },
  findById: function(resource, id, callback) {
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.findOne({id}, (err, data) => {
        if (err) {
          callback(err, null);
          return;
        }
        if (!data) {
          callback(`Object with id: ${id} not found`, null);
          return;
        }
        if ('modifyDataForClient' in controllers[resource]) {
          data = controllers[resource].modifyDataForClient(data.toJSON())
        }
        callback(err, data);
      })
    })
  },
  create: function(resource, params, callback) {
    if ('modifyParamsForCreate' in controllers[resource]) {
      params = controllers[resource].modifyParamsForCreate(params)
    }
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.create(params, (err, data) => {
        if (err) {
          callback(err, null);
          return;
        }
        if ('modifyDataForClient' in controllers[resource]) {
          data = controllers[resource].modifyDataForClient(data.toJSON())
        }
        callback(err, data);
      })
    })
  },
  update: function(resource, id, params, callback) {
    if ('modifyParamsForCreate' in controllers[resource]) {
      params = controllers[resource].modifyParamsForCreate(params)
    }
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.findOneAndUpdate({id}, params, {
        new: true
      }, (err, data) => {
        if (err) {
          callback(err, null);
          return;
        }
        if ('modifyDataForClient' in controllers[resource]) {
          data = controllers[resource].modifyDataForClient(data.toJSON())
        }
        callback(err, data);
      })
    })
  },
  delete: function(resource, id, callback) {
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.findOneAndRemove({id}, (err) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, null);
      })
    })
  },
  deleteMany: function(resource, params, callback) {
    if ('modifyParamsForFind' in controllers[resource]) {
      params = controllers[resource].modifyParamsForFind(params)
    }
    getController(resource, (err, model) => {
      if (err) {
        callback(err, null);
        return;
      }
      model.deleteMany(params, (err, data) => {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, null);
      })
    })
  }
}
