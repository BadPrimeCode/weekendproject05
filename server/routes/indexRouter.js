console.log('router.js sourced');

var express = require('express');
var router = express.Router(); // instead of var app = express();
var path = require('path');
var mongoose = require('mongoose');

mongoose.createConnection('mongodb://localhost/pets');

router.get('/', function(req,res){
      // console.log('property: ', req.params[0]);
      var file = req.params[0] || '/views/index.html';
      res.sendFile(path.join(__dirname, '../public/', file));
  }); //end direction

//require model
var Pet = require('../public/assets/models/pet');

router.get('/pets', function(req, res) {
  Pet.find({}).exec(function(err, pets) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
          res.send(JSON.stringify(pets));
    }
  });
});

router.post('/add', function(req, res) {
  console.log('hit post');
  console.log('req.body: ', req.body);

  var newPet = new Pet({
    name: req.body.name,
    animal: req.body.animal,
    age: req.body.age,
    image_url: req.body.image_url
  });

  newPet.save(function(err) {
    if(err){
      //failed
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('New pet saved successfully!');
      res.send(newPet.toJSON());
      res.sendStatus(201);
    }
  });
});

module.exports = router;
