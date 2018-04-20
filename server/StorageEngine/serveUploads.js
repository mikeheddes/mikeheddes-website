const path = require('path');
const express = require('express');
const StorageEngine = require('./index').storage;

const router = express.Router();

const badRequest = (res, err) => {
  res.status(400).json({
    status: 'Bad Request',
    message: err
  })
}

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const width = req.query.width;
  // console.log(id, ext, format);

  if (StorageEngine.isValidId(id)) {
    StorageEngine.getFile(id, width)
    .then(fileStream => {
      fileStream.on('error', err => {
        badRequest(res, err);
      })
      fileStream.pipe(res);
    }).catch(err => badRequest(res, err));
  } else {
    badRequest(res, `No file found with id: ${id}`);
  }
})


module.exports = router;
