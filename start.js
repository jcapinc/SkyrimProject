
function Calculator() {
	let currentAmount = 0;
	const add = document.getElementById("add");
	const subtract = document.getElementById("subtract")

	const inputField = document.getElementById("input");

	const output = document.getElementById("output");

	output.innerHTML = currentAmount;

	subtract.onclick = function(){
		currentAmount = currentAmount - parseInt(inputField.value);
		output.innerHTML = currentAmount;
	}
	add.onclick = function() {
		currentAmount = currentAmount + parseInt(inputField.value);
		output.innerHTML = currentAmount;
	}
}

const Effects = [
	"Cure Disease",
	"Damage Health",
	"Damage Magicka",
	"Damage Magicka Regen",
	"Damage Stamina",
	"Damage Stamina Regen",
	"Fear",
	"Fortify Alteration",
	"Fortify Barter",
	"Fortify Block",
	"Fortify Carry Weight",
	"Fortify Conjuration",
	"Fortify Destruction",
	"Fortify Enchanting",
	"Fortify Health",
	"Fortify Heavy Armor",
	"Fortify Illusion",
	"Fortify Light Armor",
	"Fortify Lockpicking",
	"Fortify Magicka",
	"Fortify Marksman",
	"Fortify One-Handed",
	"Fortify Pickpocket",
	"Fortify Restoration",
	"Fortify Smithing",
	"Fortify Sneak",
	"Fortify Stamina",
	"Fortify Two-Handed",
	"Frenzy",
	"Invisibility",
	"Lingering Damage Health",
	"Lingering Damage Magicka",
	"Lingering Damage Stamina",
	"Paralysis",
	"Ravage Health",
	"Ravage Magicka",
	"Ravage Stamina",
	"Regenerate Health",
	"Regenerate Magicka",
	"Regenerate Stamina",
	"Resist Fire",
	"Resist Frost",
	"Resist Magicka",
	"Resist Poison",
	"Resist Shock",
	"Restore Health",
	"Restore Magicka",
	"Restore Stamina",
	"Slow",
	"Water Breathing",
	"Weakness To Fire",
	"Weakness To Frost",
	"Weakness To Magicka",
	"Weakness To Poison",
	"Weakness To Shock",
];

const Ingredients = [
	"Abedean Longfin",
	"Ancestor Mothwing",
	"Ash Creep Cluster",
	"Ash Hopper Jelly",
	"Ashen Grasspod",
	"Bear Claws",
	"Bee 🐝",
	"Beehive Husk",
	"Berit's Ashes",
	"Bleeding Crown",
	"Blisterwort",
	"Blue Butterfly Wing",
	"Blue Dartwing",
	"Blue Mountain Flower",
	"Boar Tusk",
	"Bone Meal",
	"Briar Heart",
	"Burnt Spriggan Wood",
	"Butterfly Wing",
	"Canis Root",
	"Charred Skeever Hide",
	"Chaurus Eggs",
	"Chaurus Hunter Antennae",
	"Chicken Egg",
	"Creep Cluster",
	"Crimson Nirnroot",
	"Cyrodilic Spadetail",
	"Daedra Heart",
	"Deathbell",
	"Dragon Tongue",
	"Dwarven Oil",
	"Ectoplasm",
	"Elves Ear",
	"Emperor Parasol Moss",
	"Eye of Saber Cat",
	"Falmer Ear",
	"Felsaad Tern Feathers",
	"Fire Salts",
	"Fly Amanta",
	"Frost Mirriam",
	"Frost Salts",
	"Garlic",
	"Giant Lichen",
	"Giant's Toe",
	"Gleam Bloom",
	"Glow Dust",
	"Glowing Mushroom",
	"Grass Pod",
	"Hagraven Claw",
	"Hagraven Feathers",
	"Hanging Moss",
	"Hawk Beak",
	"Hawk Feathers",
	"Histcarp",
	"Honey Comb",
	"Human Flesh",
	"Human Heart",
	"Ice Wraith Teeth",
	"Imp Stool",
	"Jarrin Root",
	"Jazbay Grapes",
	"Juniper Berries",
	"Large Antlers",
	"Lavender",
	"Luna Moth Wing",
	"Moon Sugar",
	"Mora Tapinella",
	"Mudcrab Chitin",
	"Namira's Rot",
	"Netch Jelly",
	"Nightshade",
	"Nirnroot",
	"Nordic Barnacle",
	"Orange Dartwing",
	"Pearl",
	"Pine Thrush Egg",
	"Poison Bloom",
	"Powdered Mammoth Tusk",
	"Purple Mountain Flower",
	"Red Mountain Flower",
	"River Betty",
	"Rock Warbler Egg",
	"Saber Cat Tooth",
	"Salt Pile",
	"Scaly Pholiota",
	"Scathecraw",
	"Silverside Perch",
	"Skeever Tail",
	"Slaughterfish Egg",
	"Slaughterfish Scales",
	"Small Antlers",
	"Small Pearl",
	"Snowberries",
	"Spawn Ash",
	"Spider Egg",
	"Spriggan Sap",
	"Swamp Fungal Pod",
	"Taproot",
	"Thistle Branch",
	"Torchbug Thorax",
	"Trama Root",
	"Troll Fat",
	"Tundra Cotton",
	"Vampire Dust 🦇",
	"Void Salts 🧂",
	"Wheat 🌾",
	"White Cap 🍄",
	"Wisp Wrapping",
	"Yellow Mountain Flower 🌻",

];

function addListItem(value, id = "Effects") {
	const element = document.createElement("li");
	element.innerText = `${value}`;
	document.getElementById(id).appendChild(element);
}

function ShowList(list) {
	for (const value of list) {
		addListItem(value);
	}
}


function DisplayEffects() {
	for (const effect of Effects) {
		addListItem(effect);
	}
}
// 🐝 BEE FEAR 😱
function CreateDropdown(name, list, parent, currentValue = "") {
	const selectElement = document.createElement("select");
	parent.appendChild(selectElement);

	const blankOption = document.createElement('option');
	blankOption.innerHTML = "-- Choose " + name + " --";
	blankOption.value = "";
	selectElement.appendChild(blankOption);

	for (const element of list) {
		const newOption = document.createElement('option');
		newOption.innerHTML = element;
		newOption.value = element;
		selectElement.appendChild(newOption);
	}
	selectElement.value = currentValue;
	return selectElement;
}

function getDB() {
	const rawData = localStorage.getItem("ingredientEffects");
	const db = rawData === null 
		? {} 
		: JSON.parse(rawData);
	return db;
}

function CreateIngredientForm(ingredient, parent) {
	const formContainer = document.createElement("div");
	formContainer.classList.add("form-container", ingredient.toLowerCase().replaceAll(" ", "-"));
	parent.appendChild(formContainer);
	
	const title = document.createElement("h2");
	formContainer.appendChild(title);
	title.innerHTML = "Tell me the effects for " + ingredient;

	const effectContainer = document.createElement("div");
	formContainer.appendChild(effectContainer);

	const db = getDB();
	const ingredientData = db[ingredient] || [];

	const Effect1 = CreateDropdown("Effect", Effects, effectContainer, ingredientData[0]);
	const Effect2 = CreateDropdown("Effect", Effects, effectContainer, ingredientData[1]);
	const Effect3 = CreateDropdown("Effect", Effects, effectContainer, ingredientData[2]);
	const Effect4 = CreateDropdown("Effect", Effects, effectContainer, ingredientData[3]);

	const submitButton = document.createElement("button");
	formContainer.appendChild(submitButton);
	submitButton.innerText = "Save Effects";
	submitButton.addEventListener("click", function() {
		const db = getDB();
		db[ingredient] = [
			Effect1.value,
			Effect2.value,
			Effect3.value,
			Effect4.value
		];
		localStorage.setItem("ingredientEffects", JSON.stringify(db));
	});

}

function ShowIngredientForms() {
	for(const ingredient of Ingredients) {

		CreateIngredientForm(ingredient, document.body);
	}
	//CreateDropdown("Ingredient", Ingredients, document.body)
	//CreateDropdown("Effects", Effects, document.body)
}

function CopyDatabase(target) {
	const button = document.createElement("button");
	const value = localStorage.getItem("ingredientEffects");
	target.appendChild(button);
	button.addEventListener('click', () => {
		navigator.clipboard.writeText(value);
	});
	button.innerText = "Copy Database to Clipboard";
}

// CopyDatabase(document.body);
// ShowIngredientForms();

// yeet monokai pro (╯°□°）╯︵ ┻━┻ 
function displayDatabase() {
	const IngredientsWithEffects  = document.createElement("ul");
	document.body.appendChild(IngredientsWithEffects);
	const get = localStorage.getItem("ingredientEffects");
	const Database = JSON.parse(get);

	/*
	Structure of database: 
	{
		"Bees 🐝": [
			"Fear",
			"Sting",
			"Buzz",
			"Fluff"
		]
	}
	*/
	for (const alchemy in Database) {
		// In the example above, the variable "alchemy" === "Bees 🐝"
		const alchemyElement = document.createElement("li")
		IngredientsWithEffects.appendChild(alchemyElement);
		alchemyElement.innerHTML = alchemy;
		const alchemyUL = document.createElement("ul");
		alchemyElement.appendChild(alchemyUL);
		const innerAlchemy = document.createElement("li")
		alchemyUL.appendChild(innerAlchemy)
		// I had teh wrong name lol oops
		// We need this innerhtml to be set to the value of Database[alchemy][0] ✅
		innerAlchemy.innerHTML = Database[alchemy][0]
		const innerAlchemy2 = document.createElement("li")
		alchemyUL.appendChild(innerAlchemy2)
		// We need this innerhtml to be set to the value of Database[alchemy][1] ✅
		innerAlchemy2.innerHTML = Database[alchemy][1]
		const innerAlchemy3 = document.createElement("li")
		alchemyUL.appendChild(innerAlchemy3)
		// We need this innerhtml to be set to the value of Database[alchemy][2] ✅
		innerAlchemy3.innerHTML = Database[alchemy][2]
		const innerAlchemy4 = document.createElement("li")
		alchemyUL.appendChild(innerAlchemy4)
		// We need this innerhtml to be set to the value of Database[alchemy][3] ✅
		innerAlchemy4.innerHTML = Database[alchemy][3]

	}
}

/*
Structure of database: 
{
	"Bees 🐝": [
		"Fear",
		"Sting",
		"Buzz",
		"Fluff"
	]
}
*/
function getIngredientsByEffect(Database, ValidEffect = Effects[0] ) {
	const ValidIngredients = [];
	Object.keys(Database).map(ingredient => {
		Database[ingredient].map(effect => {
			if (effect === ValidEffect) {
				ValidIngredients.push(ingredient);
			}
		});
	});
	// for ( const key in Database) {
	// 	for (const effect of Database[key]) {
	// 		if (effect === ValidEffect) {
	// 			ValidIngredients.push(key);
	// 			break;
	// 		}
	// 	}
	// }
	console.log({ValidEffect, ValidIngredients})
	return ValidIngredients;
}

function showIngredientsByEffects(Database, target = document.body) {
	const selectElement = document.createElement("select");
	target.append(selectElement);
	Effects.map( effect => {
		const option = document.createElement("option");
		option.innerHTML = effect;
		option.value = effect;
		selectElement.append(option);
	});
	const ingredientContainer = document.createElement("div");
	target.append(ingredientContainer);
	selectElement.addEventListener("change", () => {
		ingredientContainer.innerHTML = "";
		const list = document.createElement("ul");
		ingredientContainer.append(list);
		getIngredientsByEffect(Database, selectElement.value).map(ingredient => {
			const item = document.createElement("li");
			list.append(item);
			item.innerHTML = ingredient;
		});
	});
}

(async function () {
	
const rawdata = localStorage.getItem("ingredientEffects")
if (rawdata === null) {
	document.body.innerHTML = "Loading Database, Reloading Page soon..."
	const response = await fetch("./ingredientEffects.json")
	const body = await response.json();
	localStorage.setItem("ingredientEffects", JSON.stringify(body));
	setTimeout(() => {
		window.location.reload();
	}, 5000);
} else {
	const database = JSON.parse(rawdata);

	showIngredientsByEffects(database);
	displayDatabase();
}
})()
