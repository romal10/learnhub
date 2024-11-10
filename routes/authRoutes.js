const express = require('express');
const router = express.Router();

// Dummy login route
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Dummy register route
router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
});

module.exports = router;
