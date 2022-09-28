const express = require("express");
const router = express.Router();
const { searchDogs } = require("../controllers/dogs");

router.route("/").get(searchDogs);

module.exports = router;
