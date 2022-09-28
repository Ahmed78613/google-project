const express = require("express");
const router = express.Router();
const {
	searchCats,
	searchCatsFilter,
	searchRandom,
} = require("../controllers/cats");

router.route("/").get(searchCats);
router.route("/filter/:id").get(searchCatsFilter);
router.route("/random").get(searchRandom);

module.exports = router;
