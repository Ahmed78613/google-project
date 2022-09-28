const {
	dogsData,
	catsData,
	fishData,
	birdsData,
	hamstersData,
} = require("../data");
const { shuffleAndFilter } = require("./helper");

const mixData = () => {
	let newArray = [];
	dogsData.map((d) => newArray.push(d));
	catsData.map((c) => newArray.push(c));
	fishData.map((f) => newArray.push(f));
	birdsData.map((b) => newArray.push(b));
	hamstersData.map((h) => newArray.push(h));
	// shuffle array
	const shuffledArray = newArray.sort((x) => Math.random() - 0.5);
	return shuffledArray;
};

const searchPets = (req, res) => {
	const allPets = mixData();
	res.status(200).send(allPets);
};

const searchPetsFiltered = (req, res) => {
	const { id } = req.params;
	const petsData = mixData();
	const filteredArray = shuffleAndFilter(petsData, id);
	if (filteredArray.length) {
		res.status(200).send(filteredArray);
	} else
		res
			.status(200)
			.send({ message: "Please enter a filter amount greater than 0" });
};

const searchRandom = (req, res) => {
	const petsData = mixData();
	const randomData = shuffleAndFilter(petsData, 1)[0];
	res.status(200).send(randomData);
};

module.exports = { searchPets, searchPetsFiltered, searchRandom };
