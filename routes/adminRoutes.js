const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', async (req, res) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }

  const users = await User.find();
  res.render('admin/dashboard', { users });
});

module.exports = router;
