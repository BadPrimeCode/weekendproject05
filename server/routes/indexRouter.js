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

module.exports = router;
