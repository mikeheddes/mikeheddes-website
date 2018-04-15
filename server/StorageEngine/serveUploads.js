const path = require('path');
const express = require('express');
const StorageEngine = require('./index').storage;

const router = express.Router();

router.get("/:id:format(-\\d+)?.:ext", (req, res, next) => {
  const id = req.params.id;
  const ext = req.params.ext;
  const format = req.params.format && req.params.format.substr(1);
  // console.log(id, ext, format);

  if (StorageEngine.isValidId(id)) {
    fileStream = StorageEngine.getFile(id, format, ext);
    fileStream.on('error', err => {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      })
    })
    fileStream.pipe(res);
  } else {
    res.status(400).json({
      status: 'Bad Request',
      message: `No file found with id: ${id}`,
    })
  }
})


module.exports = router;
