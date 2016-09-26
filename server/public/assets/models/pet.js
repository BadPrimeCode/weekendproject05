var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  name:  {type: String, required: true},
  animal: String,
  age:   Number,
  image_url: {type: String, default: 'http://static02.mediaite.com/themarysue/uploads/2016/03/Grumpy-Cat.jpg'}
});

var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
