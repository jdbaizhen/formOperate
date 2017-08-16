var mongoose = require('mongoose');
var studentSchema = require('../schemas/student');
var Student = mongoose.model('Student',studentSchema);

module.exports = Student;
