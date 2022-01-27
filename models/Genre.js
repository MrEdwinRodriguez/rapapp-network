const mongoose = require('mongoose');

const GenreSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    abbr: { type: String, required: true, unique: true },
  }, {
    timestamps: true
  });
  
  module.exports = Genre = mongoose.model('Genre', GenreSchema);