var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var termSchema = new Schema({
  term: String,
  when: Date
});



var Term = mongoose.model('Term', termSchema);
module.exports = Term;