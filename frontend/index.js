const searchBar = document.querySelector("#search");
const searchBtn = document.querySelector("#searchButton");
const randomBtn = document.querySelector("#randomButton");
const form = document.querySelector("#searchBar");
const searchResultsSection = document.querySelector("#searchResultsSection");
const topSection = document.querySelector(".search-wrapper");
const logo = document.querySelector(".logo");

// Event Listeners
form.addEventListener("submit", (e) => {
	search(e);
});
randomBtn.addEventListener("click", () => {
	searchRandom(searchBar.value);
});

async function search(e) {
	e.preventDefault();
	try {
		// clear if any old results
		const checkResults = document.querySelector(".myResults");
		console.log(checkResults);
		checkResults && checkResults.remove();
		// get search query
		const query = e.target.search.value;
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
		topSection.style.flexDirection = "row";
		logo.style.marginRight = "30px";
	} catch (error) {
		window.alert("No results for query, please try again.");
	}
}

// I'm Feeling Lucky Button
async function searchRandom(query) {
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
