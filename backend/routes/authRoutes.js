// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();

// Add a simple route for testing
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes are working' });
});

module.exports = router;