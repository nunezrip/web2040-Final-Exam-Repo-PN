// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var notesSchema = mongoose.Schema({
  description: String,
  date: String,
  author: String,
});

// create the model and expose it to our app
module.exports = mongoose.model('Note', notesSchema);