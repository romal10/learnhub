const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: { type: String, enum: ['student', 'teacher'], default: 'student' },
    password: String, // Will be hashed
    verified: { type: Boolean, default: false }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
