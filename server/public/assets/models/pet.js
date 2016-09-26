var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new mongoose.Schema({
  name:  String,
  animal: String,
  age:   Number,
  image_url: String
});

var Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;
