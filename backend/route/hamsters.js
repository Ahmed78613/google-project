const express = require("express");
const router = express.Router();
const {
	searchHamsters,
	searchHamstersFilter,
	searchRandom,
} = require("../controllers/hamsters");

router.route("/").get(searchHamsters);
router.route("/filter/:id").get(searchHamstersFilter);
router.route("/random").get(searchRandom);

module.exports = router;
