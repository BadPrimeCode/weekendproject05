var express = require ('express');
var router = express.Router();

//require model
var Pet = require('../public/assets/models/Pet');

router.get('/', function(req, res) {
  console.log('in pets get route');
  Pet.find({}, function(err, pets) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      console.log('got all the pets!');
      res.send(pets);
    }
  });
});

module.exports = router;
