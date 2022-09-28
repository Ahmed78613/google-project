const { hamstersData } = require("../data");

const searchHamsters = (req, res) => {
	res.status(200).send(hamstersData);
};

module.exports = { searchHamsters };
