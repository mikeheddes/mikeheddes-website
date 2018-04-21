const express = require('express');
const multer = require('multer');

const StorageEngine = require('../StorageEngine');
const image = require('../MongoDB/models/image');
const upload = multer(StorageEngine);
const router = express.Router();

const internalError = (err, res) => res.status(500).json({
  status: 'Internal error',
  message: err,
});

router.get("/", (req, res, next) => {
  image.find(req.querry).exec()
  .then(docs => res.json(docs))
  .catch(err => internalError(err, res))
})

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  image.findByIdForItem(id)
  .then(doc => res.json(doc))
  .catch(err => internalError(err, res))
})

router.delete("/", (req, res, next) => {
  image.deleteMany(req.querry).exec()
  .then(() => res.json({
    status: 'Succes',
    message: `Deleted image`
  }))
  .catch(err => internalError(err, res))
})

router.post("/", (req, res, next) => {
  upload.single('image')(req, res, (err) => {
    if(err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
    } else {
      if(req.file == undefined){
        res.status(400).json({
          status: 'Bad Request',
          message: 'Error: No file found'
        });
      } else {
        const file = req.file;
        res.json({
          filePath: `uploads/${file.id}`,
          imageId: file.id,
        });
      }
    }
  })
});


module.exports = router;
