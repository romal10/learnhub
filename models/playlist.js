const mongoose = require('mongoose');

// Define the Playlist schema
const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }],
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
