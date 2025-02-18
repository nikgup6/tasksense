require('dotenv').config(); // Load environment variables
const express = require('express');
const connectDB = require('./config/db'); // MongoDB connection
const userRoutes = require('./routes/userRoutes'); // Import routes

const app = express(); // Initialize Express

connectDB(); // Connect to MongoDB

app.use(express.json()); // To parse JSON data

// Add routes AFTER app initialization
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
