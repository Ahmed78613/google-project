const { dogsData } = require("../data");
const { shuffleAndFilter } = require("./helper");

const searchDogs = (req, res) => {
	res.status(200).send(dogsData);
};

const searchDogsFilter = (req, res) => {
	const { id } = req.params;
	const filteredArray = shuffleAndFilter(dogsData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const randomData = shuffleAndFilter(dogsData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchDogs, searchDogsFilter, searchRandom };
