
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const feedRoutes = require("./routes/feed");
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/feed", feedRoutes);

  
app.listen(8080, err => {
    console.log('Listening');
  });