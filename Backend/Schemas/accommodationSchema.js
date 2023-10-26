const mongoose = require('mongoose')

const accommodationSchema = mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  host: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }
})

const Accommodation = mongoose.model('accommodation', accommodationSchema)

module.exports = Accommodation