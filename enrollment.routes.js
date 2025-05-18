const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Schema
const EnrollmentSchema = new mongoose.Schema({
  email: String,
  course: Object
});
const Enrollment = mongoose.model('Enrollment', EnrollmentSchema);

// POST /api/enroll
router.post('/enroll', async (req, res) => {
  const { email, course } = req.body;
  try {
    const existing = await Enrollment.findOne({ email, 'course.id': course.id });
    if (existing) return res.status(409).send('Already enrolled');

    await Enrollment.create({ email, course });
    res.send({ message: 'Enrolled successfully' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// GET /api/enrollments?email=user@example.com
router.get('/enrollments', async (req, res) => {
  try {
    const email = req.query.email;
    const data = await Enrollment.find({ email });
    res.send(data.map(e => e.course));
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
