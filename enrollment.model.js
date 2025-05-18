const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  courseId: { type: String, required: true },
  courseTitle: { type: String, required: true }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

module.exports = Enrollment;
