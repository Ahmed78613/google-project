const express = require("express");
const router = express.Router();
const {
	searchFish,
	searchFishFilter,
	searchRandom,
} = require("../controllers/fish");

router.route("/").get(searchFish);
router.route("/filter/:id").get(searchFishFilter);
router.route("/random").get(searchRandom);

module.exports = router;
