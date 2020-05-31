// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require("mongoose");
const bookingRoutes = require("./routes/booking");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/booking", bookingRoutes);


mongoose
  .connect(
    "mongodb+srv://ravish:bridgingo@bridgingo-project-c1d1p.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(()=>{
    console.log("Database connected...");
  })
  .then(result => {
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.log(err));



