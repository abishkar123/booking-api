const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  check_in_date: {
    type: Date,
    required: true
  },
  checkout_date: {
    type: Date,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
}, {
  timestamps: true 
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
