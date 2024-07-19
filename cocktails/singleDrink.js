


import passingtailurl from "./src/fetchDrinks.js";
import displayDrink from "./src/displaySingleDrink.js";

const presentDrink = async () => {
  const id = localStorage.getItem('drink');
  console.log(id,);
  if (!id) {
    window.location.replace('index.html');
  } else {
    const drink = await  fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    let data = await drink.json();
   
    displayDrink(data);
  }
};

window.addEventListener('DOMContentLoaded', presentDrink);
