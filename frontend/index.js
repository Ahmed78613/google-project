// searchbar
const searchBar = document.querySelector("#search");
const form = document.querySelector("#searchBar");
const searchArea = document.querySelector(".searchArea");
// buttons
const searchBtn = document.querySelector("#searchButton");
const randomBtn = document.querySelector("#randomButton");
const closeBtn = document.querySelector(".closeBtn");
const helpBtn = document.querySelector(".fa-circle-info");
// results
const searchResultsSection = document.querySelector("#searchResultsSection");
// top section
const topSection = document.querySelector(".search-wrapper");
const div = document.querySelector(".searchEntry");
const logo = document.querySelector(".logo");
// other
const darkMode = document.querySelector("#darkMode");
const popup = document.querySelector(".hidden-info");

// Event Listeners
form.addEventListener("submit", (e) => {
	search(e);
});
randomBtn.addEventListener("click", () => {
	searchRandom(searchBar.value);
});
closeBtn.addEventListener("click", () => {
	searchBar.value = "";
});

darkMode.addEventListener("click", () => {
	filterDarkMode();
});
helpBtn.addEventListener("mouseover", () => {
	popup.style.display = "block";
});
helpBtn.addEventListener("mouseleave", () => {
	popup.style.display = "none";
});

async function search(e) {
	e.preventDefault();
	try {
		// clear if any old results
		const checkResults = document.querySelector(".myResults");
		checkResults && checkResults.remove();
		// get search query
		const query = e.target.search.value;
		if (query.length === 0)
			return window.alert("Please enter into the searchbar.");
		// Fetch
		const res = await fetch(`http://localhost:3000/${query}`);
		const data = await res.json();
		// Create new Div
		const parentDiv = document.createElement("div");
		parentDiv.classList.add("myResults");
		data.map((result) => {
			// Create new Elements
			const div = document.createElement("div");
			const aTag = document.createElement("a");
			const pTag = document.createElement("p");
			// Apply
			aTag.textContent = result.title;
			aTag.href = result.link;
			pTag.textContent = result.description;
			// Append
			div.appendChild(aTag);
			div.appendChild(pTag);
			parentDiv.appendChild(div);
		});
		searchResultsSection.appendChild(parentDiv);
		// Styling
		searchResultsSection.style.display = "block";
		div.style.height = "220px";
		div.style.borderBottom = "1px solid lightgrey";
		logo.style.fontSize = "44px";
		logo.style.marginRight = "20px";
	} catch (error) {
		window.alert("No results for query, please try again.");
	}
}

// I'm Feeling Lucky Button
async function searchRandom(query) {
	if (query.length === 0)
		return window.alert("Please enter into the searchbar.");
	try {
		// Fetch
		const res = await fetch(`http://localhost:3000/${query}/random`);
		const data = await res.json();
		// Redirect
		location.href = data.link;
	} catch (error) {
		window.alert("No results for querys, please try again.");
	}
}

function filterDarkMode() {
	const circle = document.querySelector(".fa-circle");
	if (circle.style.left === "1px") {
		console.log("hello");
		circle.style.color = "grey";
		circle.style.left = "unset";
		circle.style.right = "1px";
		// apply styles
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
		searchBtn.style.backgroundColor = "#f5f5f5";
		randomBtn.style.backgroundColor = "#f5f5f5";
		searchBtn.style.color = "black";
		randomBtn.style.color = "black";
	} else {
		circle.style.color = "black";
		circle.style.left = "1px";
		circle.style.right = "unset";
		// apply styles
		document.body.style.backgroundColor = "#202124";
		document.body.style.color = "white";
		searchBar.style.color = "white";
		searchArea.style.border = "1px solid #525252";
		searchBtn.style.backgroundColor = "#3b3b3b";
		randomBtn.style.backgroundColor = "#3b3b3b";
		searchBtn.style.color = "white";
		randomBtn.style.color = "white";
	}
}
