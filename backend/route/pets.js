const express = require("express");
const router = express.Router();
const { searchPets } = require("../controllers/pets");

router.route("/").get(searchPets);

module.exports = router;
