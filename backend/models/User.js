const mongoose = require('mongoose');

// Check if the model already exists before defining it
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String,
}));

module.exports = User;