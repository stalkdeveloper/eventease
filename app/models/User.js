const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: true,
    unique: false, 
  },
  dateofbirth: {
    type: Date,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: false
  },
  mobile_number: {
    type: String,
    required: false
  },
  status: {
    type: Number,
    enum: [0, 1],
    default: 1
  },
  deleted_at: {
    type: Date,
    required: false
  }
}, { timestamps: true }); 

module.exports = mongoose.model('User', userSchema);
