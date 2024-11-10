// models/playlist.js

const mongoose = require('mongoose');

// Define the Playlist Schema
const playlistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  videos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video' // Reference to the Video model
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Playlist model from the schema
const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
