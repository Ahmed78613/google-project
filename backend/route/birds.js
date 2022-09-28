const express = require("express");
const router = express.Router();
const {
	searchBirds,
	searchBirdsFilter,
	searchRandom,
} = require("../controllers/birds");

router.route("/").get(searchBirds);
router.route("/filter/:id").get(searchBirdsFilter);
router.route("/random").get(searchRandom);

module.exports = router;
