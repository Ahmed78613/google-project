const { birdsData } = require("../data");
const { shuffleAndFilter } = require("./helper");

const searchBirds = (req, res) => {
	res.status(200).send(birdsData);
};

const searchBirdsFilter = (req, res) => {
	const { id } = req.params;
	const filteredArray = shuffleAndFilter(birdsData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const randomData = shuffleAndFilter(birdsData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchBirds, searchBirdsFilter, searchRandom };
