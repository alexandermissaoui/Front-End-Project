const router = require('express').Router();
const reservationModel = require('../Models/reservationModel')


router.post('/', reservationModel.createNewReservation);

router.get('/', reservationModel.getReservations);

router.get('/:id', reservationModel.getReservationById);

router.put('/:id', reservationModel.updateReservation);

router.delete('/:id', reservationModel.deleteReservation);



module.exports = router;

