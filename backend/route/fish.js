const express = require("express");
const router = express.Router();
const { searchFish } = require("../controllers/fish");

router.route("/").get(searchFish);

module.exports = router;
