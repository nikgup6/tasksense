// backend/routes/requests.js
const express = require('express');
const router = express.Router();
const {
    createRequest,
    getRequestsByStudent,
    updateRequestStatus,
} = require('../controllers/requestController');

// Create a new request
router.post('/create', createRequest);

// Get all requests by student
router.get('/student', getRequestsByStudent);

// Update request status
router.put('/update-status', updateRequestStatus);

module.exports = router;
