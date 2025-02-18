const mongoose = require('mongoose');

// Define a schema
const dataSchema = new mongoose.Schema({
  fullname: String,
  password: String,
  email: String,
  studentId: String,
});

// Create a model from the schema
const Data = mongoose.model('Data', dataSchema);
