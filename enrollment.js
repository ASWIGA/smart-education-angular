const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  email: String,
  courseId: String,
  courseTitle: String,
});

module.exports = mongoose.model('Enrollment', enrollmentSchema);
