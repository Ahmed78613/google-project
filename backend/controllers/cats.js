const { catsData } = require("../data");

const searchCats = (req, res) => {
	res.status(200).send(catsData);
};

module.exports = { searchCats };
