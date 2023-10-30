const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    
  title:          { type: String, required: true },
  host:           { type: String, required: true },
  location:       { type: String, required: true },
  description:    { type: String, required: true },
  price:          { type: Number, required: true },
  imageUrl:       { type: String, required: true },
  checkin:        { type: String, required: true },
  checkout:       { type: String, required: true }
})

module.exports = mongoose.model('Reservation', reservationSchema)