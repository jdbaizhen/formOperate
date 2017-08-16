var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
	grade : {type :Object},
	name  : String,
	age   : Number,
	sex : String
})

module.exports = studentSchema;