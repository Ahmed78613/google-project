const express = require("express");
const router = express.Router();
const { searchHamsters } = require("../controllers/hamsters");

router.route("/").get(searchHamsters);

module.exports = router;
