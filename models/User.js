const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String }, //, required: true
    name: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String }, //, required: true
    // country: { type: Number, ref: 'Country' },
    status: {type: String, enum: ['Inactive', 'Active'], default: "Active"},
    is_admin: { type: Boolean, default: false },
    reset_password_token: String,
    reset_password_expires: Date,
    last_login:  { type: Date, default: Date.now },
  }, {
    timestamps: true
  });
  
  module.exports = User = mongoose.model('User', UserSchema);