var express = require('express');
var router = express.Router(); // instead of var app = express();
var mongoose = require('mongoose');

//model
var Pet = require('../models/pet');

// router.get('/', function(req, res) {
//
//   Pet.find({}, function(err, petResults) {
//     if(err){
//       console.log('error occurred:', err);
//       res.sendStatus(500);
//     }else{
//       res.send(petResults);
//     }
//   });
// });

router.post('/', function(req, res) {
  console.log('hit post');
  console.log('req.body: ', req.body);

  var sentData = req.body;

  var newPet = new Pet({
    name: sentData.name,
    animal: sentData.animal,
    age: sentData.age,
    image_url: sentData.image_url
  });

  newPet.save(function(err) {
    if(err){
      //failed
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('New pet saved successfully!');
      res.sendStatus(201);
    }
  });
});

module.exports = router;

// =============================
//
// console.log('index.js sourced');
//
// var express = require('express');
// var router = express.Router();
// var path = require('path');
// var mongoose = require('mongoose');
//
// router.get('/', function(req,res,next){
//     res.sendFile(path.join(__dirname, '../public/views/index.html'));
// });
//
// module.exports = router;
//
// mongoose.connect('mongodb://localhost/pets');
//
//
// router.post('/add', function(req, res, next){
//   var fluffy = new Pet({name: req.body.name, animal: req.body.animal, age: req.body.age, image_url: req.body.image_url});
//   fluffy.save(function(err){
//     if (err) {
//       console.log('meow %s', err);
//     }
//     res.send(fluffy.toJSON());
//     next();
//   });
// });
//
// router.get('/pets', function(req, res, next){
//   Pet.find({}).exec(function(err, pets){
//     if (err) {
//       throw new Error(err);
//     }
//     res.send(JSON.stringify(pets));
//     next();
//   });
// });
