const express = require('express');
const router = express.Router();
const controller = require('./controllers');


router.get("/:resource", function(req, res, next) {
  let resource = req.params.resource;

  controller.find(resource, req.query, function(err, result) {
    if (err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
      return;
    }
    res.status(200).header({
      'Access-Control-Allow-Origin': '*'
    }).json(result);
  })
})


router.get("/:resource/:id", function(req, res, next) {
  let resource = req.params.resource;
  let id = req.params.id;
  controller.findById(resource, id, function(err, result) {
    if (err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
      return;
    }
    res.status(200).json(result);
  })
})


router.post("/:resource", function(req, res, next) {
  var resource = req.params.resource;
  controller.create(resource, req.body, function(err, result) {
    if (err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
      return;
    }
    res.json(result);
  })
})

router.put("/:resource/:id", function(req, res, next) {
  let resource = req.params.resource;
  let id = req.params.id;
  controller.update(resource, id, req.body, function(err, result) {
    if (err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
      return;
    }
    res.json(result);
  })
})

router.delete("/:resource/:id", function(req, res, next) {
  let resource = req.params.resource;
  let id = req.params.id;
  controller.delete(resource, id, function(err, result) {
    if (err) {
      res.status(400).json({
        status: 'Bad Request',
        message: err
      });
      return;
    }
    res.json(result);
  })
})

// router.delete("/:resource/", function(req, res, next) {
//   let resource = req.params.resource;
//   controller.deleteMany(resource, req.query, function(err, result) {
//     if (err) {
//       res.status(400).json({status: 'Bad Request', message: err});
//       return;
//     }
//     if (err) {
//       res.status(400).json({
//         status: 'Bad Request',
//         message: err
//       });
//       return;
//     }
//     res.json(result);
//   })
// })

module.exports = router;
