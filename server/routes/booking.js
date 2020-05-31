const express = require('express');
const { body } = require('express-validator');

const bookingController = require('../controllers/booking');

const router = express.Router();

router.post('/newbooking', bookingController.newBooking);

module.exports = router;