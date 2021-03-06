const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    // username: { type: String, required: true, unique: true },
    password: { type: String }, //, required: true
    name: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String }, //, required: true
    // image_upload:{ type: Schema.Types.ObjectId, ref: 'Upload' }, 
    // country: { type: Number, ref: 'Country' },
    // rap: { type: Schema.Types.ObjectId, ref: 'Rap' },
    status: {type: String, enum: ['Inactive', 'Active'], default: "Active"},
    is_admin: { type: Boolean, default: false },
    // modified_by: { type: Schema.Types.ObjectId, ref: 'User' },
    modified_on: Date,
    created: { type: Date, default: Date.now },
    reset_password_token: String,
    reset_password_expires: Date,
    last_login:  { type: Date, default: Date.now },
  });
  
  module.exports = User = mongoose.model('user', UserSchema);