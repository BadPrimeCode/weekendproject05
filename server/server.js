console.log('server.js sourced');

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// port decision
app.set('port', (process.env.PORT || 3030));

// spin up server
app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
});

// set up public folder
app.use(express.static('public'));

// router
var indexRouter = require('./routes/indexRouter');
// use router
app.use('/', indexRouter);

// direct to path
app.get('/*', function(req,res){
    // console.log('property: ', req.params[0]);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
}); //end direction

//connection string with the database
mongoose.createConnection('mongodb://localhost:27017/pets');


// =======================================

// //demonstrate query strings and url params
// app.get('/test/:id?', function(req, res) {
//   console.log('in test route');
//
//   console.log('req.body = ', req.body);
//   console.log('req.query = ', req.query); // localhost:3000/test?q=
//   console.log('req.params = ', req.params); //localhost:3000/test/id
//
//   res.send('OK');
// });
//
