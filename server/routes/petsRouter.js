var express = require ('express');
var router = express.Router();

//require model
var Pet = require('../public/assets/models/Pet');

router.get('/', function(req, res) {
  console.log('in pets get route');
  res.sendStatus(200);
});

router.post('/add', function(req, res) {
  console.log('in pets add route');
  res.sendStatus(200);
});

module.exports = PetsRouter;
