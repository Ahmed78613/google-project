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

const birdsData = [
	{
		title: "Bird - Wikipedia",
		description:
			"Birds are a group of warm-blooded vertebrates constituting the class Aves, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.",
		link: "https://en.wikipedia.org/wiki/Bird",
	},
	{
		title: "Birds A- Z | Bird Guides - The RSPB",
		description:
			"Browse our UK bird guide by name. See birds alphabetised by name and family, A-Z in this handy guide.",
		link: "https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/",
	},
	{
		title: "Bird Pictures & Facts - National Geographic",
		description:
			"Birds are found worldwide and in all habitats. The largest is the nine-foot-tall ostrich. The smallest is the two-inch-long bee hummingbird.",
		link: "https://www.nationalgeographic.com/animals/birds",
	},
	{
		title: "Birds Bakery",
		description:
			"With 62 friendly shops to choose from Find your birds stores ... For all your queries about Birds please get in touch on: 01332 361 316",
		link: "https://birdsbakery.com/",
	},
	{
		title: "The Birds (1963) - IMDb",
		description:
			"A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.",
		link: "https://www.imdb.com/title/tt0056869/",
	},
	{
		title: "Birds – British Animals - Woodland Trust",
		description:
			"Identify woodland birds. Some woodland bird species have been declining across the UK, meaning protection of native woodland is more important than ever.",
		link: "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/birds/",
	},
	{
		title: "19 common British birds you can find in your garden",
		description:
			"A British garden is a wondrous place that can be full of nature and can attract many different species of bird. Here are 19 of the most common birds that you are likely to spot in your garden.",
		link: "https://www.lovethegarden.com/uk-en/article/19-common-british-birds-you-can-find-your-garden",
	},
	{
		title: "How to Identify 24 Common British Garden Birds",
		description:
			"Here are 24 common garden birds and 5 birds of prey you're likely to spot across the UK. Identify British birds here with our guide.",
		link: "https://www.campingandcaravanningclub.co.uk/advice/discover/british-bird-identifier/",
	},
	{
		title: "The Birds Directive - Environment - European Commission",
		description:
			"The Birds Directive is the oldest EU legislation on the environment. It aims to protect all of the 500 wild bird species naturally occurring in the European Union.",
		link: "https://ec.europa.eu/environment/nature/legislation/birdsdirective/index_en.htm",
	},
	{
		title: "Birds - BirdLife International",
		description:
			"Birds are some of the most incredible creatures on Earth. There are more than 11,000 species, each with their own unique appearance and habits.",
		link: "https://www.birdlife.org/birds/",
	},
];

const hamstersData = [
	{
		title: "Hamster - Wikipedia",
		description:
			"Hamsters are rodents (order Rodentia) belonging to the subfamily Cricetinae, which contains 19 species classified in seven genera.",
		link: "https://en.wikipedia.org/wiki/Hamster",
	},
	{
		title: "Should I Get A Pet Hamster? | Choosing A Pet | Pet Talk",
		description:
			"Whether you’re looking for your first pet, something for your kids, or you’ve kept lots of animals before, hamsters can make great pets, and can be really friendly with humans once they’ve been tamed.",
		link: "https://www.petsathome.com/pet-talk/choosing-a-pet-small-animal-hamster",
	},
	{
		title: "How to Care for Hamsters - The Spruce Pets",
		description:
			"Hamsters make great first pets—especially for kids—because they're cute and small and relatively easy to care for. Learn what they need to thrive.",
		link: "https://www.thesprucepets.com/hamsters-4162083",
	},
	{
		title: "Is a hamster the right pet for you?",
		description:
			"It can be tempting to acquire a hamster on impulse. After all, these little guys are the picture of cuteness: small, round, furry, and inquisitive. ",
		link: "https://www.humanesociety.org/resources/hamster-right-pet-you",
	},
	{
		title: "Hamsters: Diet, habits & types | Live Science",
		description:
			"Hamsters are small rodents that are commonly kept as house pets. They are distinguishable from other rodents due to their short tails, stubby legs and small ears. ",
		link: "https://www.livescience.com/27169-hamsters.html",
	},
	{
		title: "What You Need to Know Before Considering a ‘Pet’ Hamster",
		description:
			"Although hamsters are small, they still entail a big commitment. They require daily care, exercise, and attention, just like other animal companions. How can you help hamsters? Remember, there is no such thing as a “starter pet.”",
		link: "https://www.peta.org/living/animal-companions/pet-hamster-facts/",
	},
	{
		title: "Different Types of Hamsters | The Ultimate Guide",
		description:
			"Hamsters are nocturnal. In the wild, they come out mainly at night or during twilight to help them steer clear of predators. ",
		link: "https://www.myfamilyvets.co.uk/different-types-of-hamsters",
	},
	{
		title: "How to Care for Your Hamster - PetMD",
		description:
			"Hamsters are small, stocky rodents that can make excellent pets if given appropriate care and veterinary treatment. ",
		link: "https://www.petmd.com/exotic/care/evr_ex_hm_how-to-care-for-your-hamster",
	},
	{
		title: "History | About Hamsters | Hamsters | Guide | Omlet UK",
		description:
			"All hamsters have wild ancestors, even those that live with humans today. Whether you own a Syrian, a Dwarf, or a Chinese hamster, there is a rich and full history that has led to this little animal becoming a valued resident of your home.",
		link: "https://www.omlet.co.uk/guide/hamsters/about_hamsters/history/",
	},
	{
		title: "Hamster advice - Blue Cross",
		description:
			"White hamster in owner's hands. Essentials, Getting a hamster. Top 10 tips for looking after a hamster · Hamster at our Burford rehoming centre.",
		link: "https://www.bluecross.org.uk/advice/hamster",
	},
];

module.exports = { dogsData, catsData, fishData, birdsData, hamstersData };
