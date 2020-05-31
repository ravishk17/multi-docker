const { validationResult } = require('express-validator');
const Booking = require("../models/booking");

exports.newBooking = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Validation failed, entered data is incorrect.');
		error.statusCode = 422;
		throw error;
    }
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const location = req.body.location;
    const other = req.body.other;

    const booking = new Booking({
        name: name,
        email: email,
        phone: phone,
        location: location,
        other: other,
    });

    booking
        .save()
        .then(() => {
            res.status(201).json({
                message:"Query Posted"
            });
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};