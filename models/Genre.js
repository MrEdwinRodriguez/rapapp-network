const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    abbr: { type: String, required: true, unique: true },
  });
  
  module.exports = Genre = mongoose.model('genre', GenreSchema);