const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');  // your user routes
const enrollmentRoutes = require('./routes/enrollment.routes'); // enrollment routes

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/smart-education')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use the user and enrollment routes
app.use('/api/users', userRoutes);  
app.use('/api/enrollments', enrollmentRoutes); 

// Start the server
app.listen(6000, () => {
  console.log('Server running on http://localhost:4000');
});
