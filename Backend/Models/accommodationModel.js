const Accommodation = require('../Schemas/accommodationSchema')

/*
  GET /api/accommodations
  hämtar alla 
*/
exports.getAllAccommodations = (req, res) => {
  Accommodation.find()
    .then(data => {
      res.status(200).json(data)
    })
}

/*
  POST /api/accommodations
  skapar en ny accommodation
*/
exports.createNewAccommodation = (req, res) => {
  const {host, location, description, price } = req.body

  Accommodation.create({host, location, description, price})
    .then(data => {
      res.status(201).json(data)
    })

}

/*
  GET /api/accommodations/:id
  hämtar ett specifikt boende med hjälp av id
*/
exports.getAccommodationById = (req, res) => {

  Accommodation.findOne({ _id: req.params.id })
    .then(data => {
      res.status(200).json(data)
    })
}