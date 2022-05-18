
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
	"Bee",
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

function ShowList(list) {
	for (const value of list) {
		const element = document.createElement("li");
		element.innerText = `😎 ${value} 😎`;
		document.getElementById("list").appendChild(element);
	}
}

ShowList(Ingredients);
ShowList(Effects);
ShowList(Ingredients);
ShowList(Effects);