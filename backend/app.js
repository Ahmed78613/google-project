const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
// Importing Routes
const petsRoute = require("./route/pets");
const catsRoute = require("./route/cats");
const dogsRoute = require("./route/dogs");
const fishRoute = require("./route/fish");
const birdsRoute = require("./route/birds");
const hamstersRoute = require("./route/hamsters");
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Default
app.get("/", (req, res) => {
	res.send("Welcome to our Google API!");
});

// Calling Routes
app.use(["/pets", "/pet"], petsRoute);
app.use(["/cats", "/cat"], catsRoute);
app.use(["/dogs", "/dog"], dogsRoute);
app.use(["/fish", "fishes"], fishRoute);
app.use(["/birds", "/bird"], birdsRoute);
app.use(["/hamsters", "/hamster"], hamstersRoute);

module.exports = app;
