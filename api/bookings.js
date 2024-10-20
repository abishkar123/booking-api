const express = require('express');
const router = express.Router();
const Booking = require('../models/BookingSchema');

// Create a new booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body); 
    await newBooking.save(); 
    res.status(201).json("successfully created the booking.!");
  } catch (error) {
    res.status(400).json({ error: 'Failed to create booking' });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

module.exports = router;
