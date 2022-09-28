const { dogsData, catsData, fishData } = require("../data");

const mixData = () => {
	let newArray = [];
	dogsData.map((d) => newArray.push(d));
	catsData.map((c) => newArray.push(c));
	fishData.map((f) => newArray.push(f));
	// shuffle array
	const shuffledArray = newArray.sort((x) => Math.random() - 0.5);
	return shuffledArray;
};

const searchPets = (req, res) => {
	const allPets = mixData();
	res.status(200).send(allPets);
};

module.exports = { searchPets };
