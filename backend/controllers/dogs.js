const { dogsData } = require("../data");

const searchDogs = (req, res) => {
	res.status(200).send(dogsData);
};

module.exports = { searchDogs };
