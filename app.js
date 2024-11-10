const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');

// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const videoRoutes = require('./routes/videoRoutes');

// Setup mongoose connection (update this URL)
mongoose.connect('mongodb://localhost/learnhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');  // Use EJS as the templating engine
app.set('views', path.join(__dirname, 'views'));  // Views folder path

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse incoming data (for forms)
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use('/', authRoutes);
app.use('/admin', adminRoutes);
app.use('/videos', videoRoutes);

// Default route (landing page)
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Learnhub',
    searchPlaceholder: 'Search for lecturers or courses...',
  });
});

// Listen on port 3000
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
