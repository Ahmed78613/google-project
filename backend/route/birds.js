const express = require("express");
const router = express.Router();
const { searchBirds } = require("../controllers/birds");

router.route("/").get(searchBirds);

module.exports = router;
