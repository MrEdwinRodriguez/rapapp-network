const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    level: [{type: String, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], default: 1}],
    overall_score: { type: Number, required: true, default: 0 },
    username: { type: String, unique: true},
    bio: String,
    profileImage: { type: String },
    genre_list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'genre' }],
    status: {type: String, enum: ['Inactive', 'Active'], default: "Active"},
    phone_number: String,
    address: String,
    address2: String,
    city: String,
    // state_province: { type: Number, ref: 'StateProvince' },
    state_province_name: String, // custom state province
    postal_code: String,
    created_on: { type: Date, default: Date.now },
    modified_on: Date,
    social: {
      youtube: {type: String},
      twitter: {type: String},
      facebook: {type: String},
      linkedin: {type: String},
      instagram: {type: String},
    },
  }, {
    timestamps: true
  });
  
  module.exports = Profile = mongoose.model('Profile', ProfileSchema);