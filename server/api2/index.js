const express = require('express');
const router = express.Router();

const image = require('../StorageEngine/routes');
const resources = require('../MongoDB/models');

const internalError = (err, res) => res.status(500).json({
  status: 'Internal error',
  message: err,
});

const toClient = (docs) => {
  const changeId = (doc) => {
    doc.id = doc._id;
    delete doc._id;
    return doc
  }
  if (docs instanceof Array) {
    return docs.map(changeId);
  } return changeId(docs);
}

router.use("/image", image);

router.use("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  if(resource in resources) {
    next();
  } else {
    res.status(400).json({
      status: 'Bad Request',
      message: `${resource} is not an API endpoint.`,
    });
  }
})

router.get("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  const limit = req.query.limit;
  delete req.query.limit;
  const opts = {
    sort: {
      publishedAt: -1,
    },
    limit: limit ? Math.round(Number(limit)) : Number.MAX_SAFE_INTEGER,
  };
  resources[resource].findWithImage(req.query, opts)
  .then(docs => res.json(toClient(docs)))
  .catch(err => internalError(err, res))
})

router.get("/:resource/:id", (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;
  resources[resource].findById(id).exec()
  .then(doc => res.json(toClient(doc)))
  .catch(err => internalError(err, res))
})

router.put("/:resource/:id", (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;
  resources[resource].findByIdAndUpdate(id, req.body, {new: true}).exec()
  .then(doc => res.json(doc))
  .catch(err => internalError(err, res))
})

router.delete("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  resources[resource].deleteMany(req.querry).exec()
  .then(() => res.json({
    status: 'Succes',
    message: `Deleted ${resource}`
  }))
  .catch(err => internalError(err, res))
})

router.post("/:resource", (req, res, next) => {
  const resource = req.params.resource;
  resources[resource].create(req.body)
  .then(docs => res.json(docs))
  .catch(err => internalError(err, res))
});


module.exports = router;
