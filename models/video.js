const mongoose = require('mongoose');

// Define the Video schema
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true }, // URL of the video
  playlist: { type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
