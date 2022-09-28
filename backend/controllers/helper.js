const shuffleAndFilter = (data, id) => {
	// Shuffle Array
	const shuffledArray = data.sort((x) => Math.random() - 0.5);
	// Filter Array
	const filteredArray = shuffledArray.filter((item, i) => i < id);
	return filteredArray;
};

module.exports = { shuffleAndFilter };
