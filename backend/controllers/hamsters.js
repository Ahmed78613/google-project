const { hamstersData } = require("../data");
const { shuffleAndFilter } = require("./helper");

const searchHamsters = (req, res) => {
	res.status(200).send(hamstersData);
};

const searchHamstersFilter = (req, res) => {
	const { id } = req.params;
	const filteredArray = shuffleAndFilter(hamstersData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const randomData = shuffleAndFilter(hamstersData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchHamsters, searchHamstersFilter, searchRandom };
