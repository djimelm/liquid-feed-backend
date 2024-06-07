const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Route to create a new user
router.post('/signup', async (req, res) => {
  const { username, password, email } = req.body;
  try {
    const user = await User.create({ username, password, email });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to log in a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && user.password === password) {
      res.json({ token: 'dummy-token' }); // Implement proper token handling
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
