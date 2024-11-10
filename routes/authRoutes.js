const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Register route
router.get('/register', (req, res) => {
  res.render('register');
});

// Handle registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }
    const user = new User({ email, password });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('login');
});

// Handle login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('User not found');
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send('Invalid credentials');
    }
    req.session.userId = user._id;
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
