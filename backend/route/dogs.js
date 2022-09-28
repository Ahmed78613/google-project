const express = require("express");
const router = express.Router();
const {
	searchDogs,
	searchDogsFilter,
	searchRandom,
} = require("../controllers/dogs");

router.route("/").get(searchDogs);
router.route("/filter/:id").get(searchDogsFilter);
router.route("/random").get(searchRandom);

module.exports = router;
