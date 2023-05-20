<<<<<<< Updated upstream
const express = require('express');
const routes = require('./routes');
=======
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
>>>>>>> Stashed changes

const app = express();
const PORT = 3000;

<<<<<<< Updated upstream
=======
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mongoose connection
mongoose.connect("mongodb://127.0.0.1:27017/trailmates", {
  useNewUrlParser: true,
  // useUnifiedTopology: true
});

// Event handler for successful connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Event handler for connection error
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to MongoDB:", err);
});

>>>>>>> Stashed changes
routes(app);

app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
