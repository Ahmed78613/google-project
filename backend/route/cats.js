const express = require("express");
const router = express.Router();
const { searchCats } = require("../controllers/cats");

router.route("/").get(searchCats);

module.exports = router;
