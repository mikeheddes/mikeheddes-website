const express = require('express');
const multer = require('multer');
const crypto = require('crypto');
const sharp = require('sharp');
const path = require('path');
const router = express.Router();

const StorageEngine = require('../StorageEngine');
const upload = multer(StorageEngine);

const resources = require('../MongoDB/models');

const internalError = (err, res) => res.status(500).json({
  status: 'Internal error',
  message: err,
})

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
  resources[resource].find(req.querry).exec()
  .then(docs => res.json(docs))
  .catch(err => internalError(err, res))
})

router.get("/:resource/:id", (req, res, next) => {
  const resource = req.params.resource;
  const id = req.params.id;
  resources[resource].findById(id).exec()
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
  StorageEngine.storage._createId((err, id) => {
    console.log(id);
    if (err) internalError(err, res);
    else {
      req.body._id = id;
      resources[resource].create(req.body)
      .then(docs => res.json(docs))
      .catch(err => internalError(err, res))
    }
  })
});


// router.post("/:resource", (req, res, next) => {
//   var resource = req.params.resource;
//   upload.single('myImage')(req, res, (err) => {
//     if(err) {
//       res.status(400).json({
//         status: 'Bad Request',
//         message: err
//       });
//     } else {
//       if(req.file == undefined){
//         res.status(400).json({
//           status: 'Bad Request',
//           message: 'Error: No File Selected!'
//         });
//       } else {
//         const file = req.file;
//         console.log(file);
//         res.json({
//           msg: 'File Uploaded!',
//           filePath: `uploads/${file.fileId}-${file.widths[file.widths.length - 1]}${file.extension}`
//         });
//       }
//     }
//   })
// })



module.exports = router;
