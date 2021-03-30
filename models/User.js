const mongoos = require('mongoose');

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String }, //, required: true
    name: { type: String },
    first_name: { type: String, required: true },
    last_name: { type: String }, //, required: true
    // image_upload:{ type: Schema.Types.ObjectId, ref: 'Upload' }, 
    phone_number: String,
    address: String,
    address2: String,
    city: String,
    // state_province: { type: Number, ref: 'StateProvince' },
    state_province_name: String, // custom state province
    postal_code: String,
    // country: { type: Number, ref: 'Country' },
    // rap: { type: Schema.Types.ObjectId, ref: 'Rap' },
    status: {type: String, enum: ['Inactive', 'Active'], default: "Active"},
    is_admin: { type: Boolean, default: false },
    modified_by: { type: Schema.Types.ObjectId, ref: 'User' },
    modified_on: Date,
    created: { type: Date, default: Date.now },
    reset_password_token: String,
    reset_password_expires: Date,
    last_login:  { type: Date, default: Date.now },
  });
  
  module.exports = User = mongoose.model('user', UserSchema);