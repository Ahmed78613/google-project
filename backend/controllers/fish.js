const { fishData } = require("../data");
const { shuffleAndFilter } = require("./helper");

const searchFish = (req, res) => {
	res.status(200).send(fishData);
};

const searchFishFilter = (req, res) => {
	const { id } = req.params;
	const filteredArray = shuffleAndFilter(fishData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const randomData = shuffleAndFilter(fishData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchFish, searchFishFilter, searchRandom };
