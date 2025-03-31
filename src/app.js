const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require('./routes/authRoute')

app.use(express.json());


app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Hello, Express is working!");
});


module.exports = app;
