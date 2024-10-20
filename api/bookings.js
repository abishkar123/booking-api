// bookings.js
const express = require('express');

const router = express.Router(); // Create a new router instance

router.post('/', (req, res) => {
 
  const bookingData = req.body; // Capture the booking data from the request body
  
  res.status(201).json({
    status: 'success',
    message: 'Booking created successfully!',
    data: bookingData,
  });
});


module.exports = router;

