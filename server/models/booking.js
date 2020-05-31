const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email:{
    type: String,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  location: {
    type: String,
    required: false,
  },
  other: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);