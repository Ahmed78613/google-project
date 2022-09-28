const { catsData } = require("../data");
const { shuffleAndFilter } = require("./helper");

const searchCats = (req, res) => {
	res.status(200).send(catsData);
};

const searchCatsFilter = (req, res) => {
	const { id } = req.params;
	const filteredArray = shuffleAndFilter(catsData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const randomData = shuffleAndFilter(catsData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchCats, searchCatsFilter, searchRandom };
