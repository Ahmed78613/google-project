const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const catsRoute = require("./route/cats");
const dogsRoute = require("./route/dogs");
const fishRoute = require("./route/fish");
const petsRoute = require("./route/pets");
// middleware
app.use(cors());
app.use(bodyParser.json());

// Default
app.get("/", (req, res) => {
	res.send("Welcome to our Google API!");
});
// Routes
app.use("/cats", catsRoute);
app.use("/dogs", dogsRoute);
app.use("/fish", fishRoute);
app.use("/pets", petsRoute);

module.exports = app;
