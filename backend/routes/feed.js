const express = require("express");
const feedController = require("../controllers/feed");
const router = express.Router();

router.post("/book",feedController.book);

module.exports = router;