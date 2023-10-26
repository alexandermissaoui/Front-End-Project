// const express = require('express');
// const router = express.Router();
const router = require('express').Router()
const accommodationModel = require('../Models/accommodationModel')

router.get('/', accommodationModel.getAllAccommodations);
router.get('/:id', accommodationModel.getAccommodationById)
router.post('/', accommodationModel.createNewAccommodation)


module.exports = router;