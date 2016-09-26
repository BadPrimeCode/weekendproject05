var express = require ('express');
var router = express.Router();

//require model
var Pet = require('../public/assets/models/Pet');

router.post('/', function(req, res) {
  console.log('in pets add route');
  console.log('sent pet: ', req.body);

  var newPet = new Pet({
    name: req.body.name,
    animal: req.body.animal,
    age: req.body.age,
    image_url: req.body.image_url
  });

  newPet.save(function(err) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log(newPet.name + ' saved!');
      res.sendStatus(201);
    }
  });
});

module.exports = addRouter;
