const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    level: [{type: String, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], default: 1}],
    overall_score: { type: Number, required: true, default: 0 },
    username: String,
    genre_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
    phone_number: String,
    address: String,
    address2: String,
    city: String,
    // state_province: { type: Number, ref: 'StateProvince' },
    state_province_name: String, // custom state province
    postal_code: String,
    created_on: { type: Date, default: Date.now },
    modified_on: Date,
  });
  
  module.exports = Profile = mongoose.model('profile', ProfileSchema);