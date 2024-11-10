const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String, default: 'default.jpg' },
  role: { type: String, default: 'student' },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Playlist' }],
});

module.exports = mongoose.model('User', userSchema);
