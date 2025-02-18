const express = require('express');
const mongoose = require('mongoose'); // Ensure you have MongoDB connected
const User = require('./models/User'); // Import your User model

const app = express();
app.use(express.json()); // To parse JSON request bodies

mongoose.connect('mongodb://localhost:27017/student_requests', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB:', err));
app.post('/api/users/register', async (req, res) => {
    const { fullName, email, password, confirmpassword, studentId } = req.body;

    if (!fullName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    console.log(fullName, email, password, confirmpassword, studentId);
    try {
        const newUser = new User({ fullName, email, password, confirmpassword, studentId });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

