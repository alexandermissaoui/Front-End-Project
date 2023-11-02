const Reservation = require('../Schemas/reservationSchema');


  exports.createNewReservation = (req, res) => {
    const { title, host, location, description, price, imageUrl, accommodation, checkin, checkout, } = req.body;
  
    if(!title || !host || !location || !description || !price || !imageUrl ||  !accommodation || !checkin || !checkout) {
      res.status(400).json({
        message: 'You need to enter all the fields'
      })
      return
    }
  
    Reservation.create({ title, host, location, description, price, imageUrl, accommodation, checkin, checkout })
      .then(data => res.status(201).json(data))
      .catch(() => res.status(500).json({ message: 'Someting went wrong when adding the reservation'}))
  }



exports.getReservations = (req, res) => {

  Reservation.find()
    .then(reservations => {
      res.status(200).json(reservations)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Could not get the reservations'
      })
    })
}



exports.getReservationById = (req, res) => {

  Reservation.findById(req.params.id)
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json( reservation ) 
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong'
      })
    })
  }



exports.updateReservation = (req, res) => {

  Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json(reservation)
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when updating the reservation'
      })
    })

}



exports.deleteReservation = (req, res) => {

  Reservation.findByIdAndDelete(req.params.id)
    .then(reservation => {
      if(!reservation) {
        res.status(404).json({ message: 'could not find that reservation'})
        return
      }

      res.status(200).json({ id: reservation._id })
    })
    .catch(() => {
      res.status(500).json({
        message: 'Someting went wrong when deleteing the reservation'
      })
    })
}