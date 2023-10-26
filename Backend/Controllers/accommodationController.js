// const express = require('express');
// const router = express.Router();
const router = require('express').Router()
const userModel = require('../Models/accommodationModel')

router.get('/', userModel.getAllAccommodations);
router.get('/:id', userModel.getAccommodationById)
router.post('/', userModel.createAccommodationUser)


module.exports = router;