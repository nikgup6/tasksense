const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Set up the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URL (use your MongoDB Atlas URI here)
const dbURI = 'mongodb+srv://b8286006:WXUCsMiBpxKSdQNG@cluster1.btk0n.mongodb.net/tasksensee?retryWrites=true&w=majority&appName=cluster1';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// Define your data model (for example, User)
const User = mongoose.model('User', new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    studentId: String,
}));

// Handle POST request to register user
app.post('/api/users/register', async (req, res) => {
    const { fullName, email, password, studentId } = req.body;

    // Validation
    if (!fullName || !email || !password || !studentId) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Save user to MongoDB
    try {
        const newUser = new User({
            fullName,
            email,
            password,
            studentId,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
