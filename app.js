const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const videoRoutes = require('./routes/videoRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/learnhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

// Set up middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret_key',  // Use a secret key for the session
  resave: false,
  saveUninitialized: true,
}));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(authRoutes);
app.use(adminRoutes);
app.use(videoRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
