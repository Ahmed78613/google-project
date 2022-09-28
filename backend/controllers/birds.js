const { birdsData } = require("../data");

const searchBirds = (req, res) => {
	res.status(200).send(birdsData);
};

module.exports = { searchBirds };
