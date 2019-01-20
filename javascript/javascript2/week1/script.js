//to click button
let button = document.getElementById("displaySpriritAnimal");
button.addEventListener("click", function(){
	let textFeild = document.getElementById("name").value;
	//alert (animal);

	//to create random Items
	let randomItem = Math.floor(Math.random() * 10);
	//console.log(randomItem);

    let spiritAnimalArea = document.getElementById("spiritAnimal");
    spiritAnimalArea.innerHTML = textFeild + " - " + spritiAnimalArray[randomItem];
    
});

//spirit animal array
let spritiAnimalArray = [
 "Obsidian ape of Kovo",
 "Marble swan of Ninani",
 "Silver wolf of Briggan",
 "Glass polar Bear or Suka",
 "Jade serpent of Generation",
 "Bronze eagle of Halawir",
 "Bambo panda of Jhi",
 "Platinum Elk of Tellun",
 "Iron Boar Of Rumfuss",
 "Golden Lion Of Cabaro"
]; 