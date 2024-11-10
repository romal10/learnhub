const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Serve static files (CSS, JS, images, etc.) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// ... other routes and middleware
