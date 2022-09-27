const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

//routes
app.get("/", (req, res) => {
	res.send("Welcome to our Google API!");
});

// Get the server running
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
