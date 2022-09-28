const { fishData } = require("../data");

const searchFish = (req, res) => {
	res.status(200).send(fishData);
};

module.exports = { searchFish };
