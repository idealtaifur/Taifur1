'use strict';

const express = require('express');
const router = express.Router();

// Sample user data
const users = {
  '1': { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  '2': { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
};

// Endpoint to get user profile information
router.get('/profile/:id', (req, res) => {
  const userId = req.params.id;
  const user = users[userId];

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

module.exports = router;