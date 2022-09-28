const dogsData = [
	{
		title: "Dog - Wikipedia",
		description:
			"The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf.",
		link: "https://en.wikipedia.org/wiki/Dog",
	},
	{
		title: "Dog, facts and photos - National Geographic",
		description:
			"Domestic dogs are mostly kept as pets, though many breeds are capable of surviving on their own, whether it’s in a forest or on city streets.",
		link: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-dog",
	},
	{
		title: "Dogs | Healthy Pets, Healthy People | CDC",
		description:
			"Dogs can have many positive effects on the lives of their owners. They influence social, emotional, and cognitive development in children, promote an active lifestyle, provide companionship, and have even been able to detect oncoming epileptic seizures or the presence of certain cancers.",
		link: "https://www.cdc.gov/healthypets/pets/dogs.html",
	},
	{
		title: "Puppies for sale in London - Pets4Homes",
		description:
			"The puppies are very friendly around the other dogs and around the kids. The parents are very beautiful and they won some award too in the dog shows.",
		link: "https://www.pets4homes.co.uk/sale/dogs/local/london/",
	},
	{
		title: "How To Look After a Dog - Dog Facts - RSPCA",
		description:
			"Owning a dog is great fun and immensely rewarding. But given that dogs have complex needs, our expert advice will help you ensure your dog is healthy and happy. Take a look around and learn more about caring for a dog!",
		link: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs",
	},
	{
		title: "Most Popular Dog Breeds - Good Housekeeping",
		description:
			"Most Popular Dog Breeds. scottish terrier. These 22 Hypoallergenic Dogs Don't Shed.",
		link: "https://www.goodhousekeeping.com/dog-breeds/",
	},
	{
		title: "Discover Dogs",
		description:
			"DISCOVER Mad about dogs? Visit Discover Dogs and find your favourite breed The Kennel Club is the organisation responsible for running Discover Dogs everyday.",
		link: "https://www.discoverdogs.org.uk/",
	},
	{
		title: "All Dog Breeds - Complete List of Dog Profiles - DogTime",
		description:
			"Detailed profiles of more than 200 dog breeds. Includes personality, history, dog pictures, dog health info, and more.",
		link: "https://dogtime.com/dog-breeds/profiles",
	},
	{
		title: "Assistance dogs - Transport for London",
		description:
			"Know your rights when travelling by taxi, minicab or chauffeured vehicle with an assistance dog.",
		link: "https://tfl.gov.uk/transport-accessibility/assistance-dogs",
	},
	{
		title: "Watch Dogs | Netflix Official Site",
		description:
			"These heartwarming stories explore the abiding emotional bonds that form between dogs and their caregivers, no matter the circumstances.",
		link: "https://www.netflix.com/gb/title/80191036",
	},
];

const catsData = [
	{
		title: "Cat - Wikipedia",
		description:
			"The cat (Felis catus) is a domestic species of small carnivorous mammal.It is the only domesticated species in the family Felidae and is sometimes referred to as the domestic cat or house cat to distinguish it from the wild members of the family.",
		link: "https://en.wikipedia.org/wiki/Cat",
	},
	{
		title: "Cats Protection | UK's Largest Cat Welfare Charity",
		description:
			"We are the UK's leading cat charity. We help 200000 cats and kittens every year - with your support we can help even more.",
		link: "https://www.cats.org.uk/",
	},

	{
		title: "Cats the Musical • Official Website and Tickets",
		description:
			"Andrew Lloyd Webber's record-breaking, award-winning, family favourite West End and Broadway musical CATS - book your tickets today!",
		link: "https://www.catsthemusical.com/",
	},
	{
		title: "Cats (2019) - IMDb",
		description:
			"A tribe of cats called the Jellicles must decide yearly which one will ascend to the Heaviside Layer and come back to a new Jellicle life.",
		link: "https://www.imdb.com/title/tt5697572/",
	},
	{
		title: "cat | Breeds & Facts - Encyclopedia Britannica",
		description:
			"cat, (Felis catus), also called house cat or domestic cat, domesticated member of the family Felidae, order Carnivora, and the smallest member of that family.",
		link: "https://www.britannica.com/animal/cat",
	},
	{
		title: "Cat Care Tips, Advice & Health Information - RSPCA",
		description:
			"Caring for cats and kittens · Cat fact file. No two cats are the same, but understanding their biology and behaviour can help you to understand your pet better.",
		link: "https://www.rspca.org.uk/adviceandwelfare/pets/cats",
	},
	{
		title: "Cats | Healthy Pets, Healthy People | CDC",
		description:
			"Research has shown that cats can provide emotional support, improve moods, and contribute to the overall morale of their owners. ",
		link: "https://www.cdc.gov/healthypets/pets/cats.html",
	},
	{
		title: "Feral and Street Cats - International Cat Care Charity",
		description:
			"Feral and street cats cannot simply be picked up and taken to a veterinarian for neutering and they cannot be kept for long recovery periods in veterinary cages.",
		link: "https://icatcare.org/unowned-cats/feral-street-cats/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElcgfs_u7V4eMFUQ7dC3z1iRwdXHp_lCv83Kfo3-phTSrcsz6jDjm4xoCePYQAvD_BwE",
	},
	{
		title: "Domestic cat - National Geographic",
		description:
			"From ancient Egyptians to today’s internet users, people have always loved their cats. As mostly nocturnal animals, cats have excellent vision and hearing, with ears that can turn like satellite dishes. ",
		link: "https://www.nationalgeographic.com/animals/mammals/facts/domestic-cat",
	},
	{
		title: "Complete Guide to Caring for Cats",
		description:
			"Your cat's online owners manual, featuring articles about breed information, cat selection, training, grooming and care for cats and kittens.",
		link: "http://www.vetstreet.com/cats/",
	},
];

const fishData = [
	{
		title: "Fish - Wikipedia",
		description:
			"Fish are aquatic, craniate, gill-bearing animals that lack limbs with digits. Included in this definition are the living hagfish, lampreys, and cartilaginous and bony fish as well as various extinct related groups.",
		link: "https://en.wikipedia.org/wiki/Fish",
	},
	{
		title: "For the Fishes - List Of Different Fish Types",
		description:
			"View Our List Of The Top 30 Fish That Are Most Threatened For Use In Personal Aquariums.",
		link: "https://forthefishes.org/30-most-threatened-aquarium-fish-page/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElXldUg924r3Vzme-Y1S-nuJhhG5EeClk_gVogF3sX6aVOzy8nljF9xoCzbIQAvD_BwE",
	},
	{
		title: "Fish Pictures & Facts - National Geographic",
		description:
			"Your destination for news, pictures, facts, and videos about fish. ... Fin fish like salmon have gills, are covered in scales, and reproduce by laying eggs.",
		link: "https://www.nationalgeographic.com/animals/fish",
	},
	{
		title: "Fish recipes | Jamie Oliver",
		description:
			"A beautiful selection of the best fish dishes. How about a Fantastic fish tikka curry, or Summer salmon salad? Find your new favourite fish dish here.",
		link: "https://www.jamieoliver.com/recipes/fish-recipes/",
	},
	{
		title: "Fish and shellfish - NHS",
		description:
			"Oily fish – such as salmon and sardines – is also particularly high in long-chain omega-3 fatty acids, which can help to keep your heart healthy. ",
		link: "https://www.nhs.uk/live-well/eat-well/food-types/fish-and-shellfish-nutrition/",
	},
	{
		title: "Fish - Information, Statistics & More",
		description:
			"We Are Dedicated To Saving Wildlife And Wild Places And Inspiring People To Value Nature. Improving Biodiversity & Protecting Nature Reserves In The NE. Join Our Newsletter! Volunteering. Education. Events. Protecting. Conservation.",
		link: "https://www.nwt.org.uk/wildlife-explorer/marine/fish-sharks-skates-and-rays?gclid=CjwKCAjwvsqZBhAlEiwAqAHElULqIIjsa3NHb9jcukuXmlM9uyNPxAx4QAvgsODW4f_LdKK_C1OKhRoCOOgQAvD_BwE",
	},
	{
		title: "The Marine Aquarium Trade - Ethical Purchasing of Fish",
		description:
			"Characteristics of a Sustainable Marine Aquarium Fish. Staying Informed about Sustainability Issues Facing the Aquarium Trade. Find A Club. Join Online. View Programs.",
		link: "https://masna.org/masna-education/ethical-purchasing/?gclid=CjwKCAjwvsqZBhAlEiwAqAHElfC_flTD3K4xu58CwFEPHgzzHALKZAvrhjqcsSjN48r6ZbxxTmBOAhoCzqIQAvD_BwE",
	},
	{
		title: "Fish as food - Wikipedia",
		description:
			"Many species of fish are caught by humans and consumed as food in virtually all regions around the world. Fish has been an important dietary source of protein and other nutrients throughout human history.",
		link: "https://en.wikipedia.org/wiki/Fish_as_food",
	},
	,
	{
		title: "Fish recipes | BBC Good Food",
		description: "https://www.bbcgoodfood.com/recipes/collection/fish-recipes",
		link: "We've got plenty of inspiration for easy fish suppers, including curries, pies and paellas. Discover recipes for cod, salmon, tuna, sea bass, hake, mackerel, haddock and plenty more.",
	},
	{
		title: "The Fish Hotel: Luxury Hotel in the Cotswolds",
		description:
			"Welcome to The Fish, a luxury hotel in the Cotswolds. Back-to-nature bolt-hole with a little touch of luxury. Book direct on the official website here.",
		link: "https://www.thefishhotel.co.uk/",
	},
];

module.exports = { dogsData, catsData, fishData };
