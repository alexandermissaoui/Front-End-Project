const router = require('express').Router();
const reservationModel = require('../Models/reservationModel')
const auth = require('../Authentication/auth')


router.post('/', auth.verifyToken, reservationModel.createNewReservation);

router.get('/', reservationModel.getReservations);

router.get('/:id', reservationModel.getReservationById);

router.put('/:id', reservationModel.updateReservation);

router.delete('/:id', reservationModel.deleteReservation);

router.get('/user/me', auth.verifyToken, reservationModel.getUserReservations);



module.exports = router;

