// models/video.js

const mongoose = require('mongoose');

// Define the Video Schema
const videoSchema = new mongoose.Schema({
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
  url: {
    type: String,
    required: true
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Create the Video model from the schema
const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
