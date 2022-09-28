const express = require("express");
const router = express.Router();
const {
	searchPets,
	searchPetsFiltered,
	searchRandom,
} = require("../controllers/pets");

router.route("/").get(searchPets);
router.route("/filter/:id").get(searchPetsFiltered);
router.route("/random").get(searchRandom);

module.exports = router;
