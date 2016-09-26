var express = require ('express');
var router = express.Router();

//require model
var Pet = require('../public/assets/models/Pet');

router.post('/add', function(req, res) {
  console.log('in pets add route');
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
      console.log(newPet.name + ' saved successfully!');
      res.send(newPet.toJSON());
      res.sendStatus(201);
    }
  });
});

module.exports = addRouter;
