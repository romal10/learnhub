const express = require('express');
const Video = require('../models/video');
const Playlist = require('../models/playlist');
const router = express.Router();

// Add new video route
router.post('/upload', async (req, res) => {
  const { title, description, url, playlistId } = req.body;

  const video = new Video({ title, description, url, playlist: playlistId });
  await video.save();

  const playlist = await Playlist.findById(playlistId);
  playlist.videos.push(video);
  await playlist.save();

  res.redirect('/videos');
});

module.exports = router;
