require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bookingsRouter = require('./api/bookings'); 

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());




app.use('/api/bookings', bookingsRouter);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.log('Error connecting to MongoDB Atlas:', err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
