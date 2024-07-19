
import getElement from "../src/getElement.js";
import { hideLoading} from "../src/toggleLoading.js";
import setDrink from "./setDrink.js";


export default function presentdata({ drinks }) {

    let sectioncenter = getElement('.section-center')

    
    if(sectioncenter){
      setDrink(sectioncenter)
    }
  //  console.log(sectioncenter, '123');

      sectioncenter.innerHTML = drinks.map((drink)=>{

      //  console.log(drink,'drink');

        const { idDrink:id, strDrinkThumb:image ,strDrink:name } = drink; // Renaming the object name;

       return `<a href="drink.html?id=${id}">
          <article class="cocktail" data-id="${id}">
            <img src="${image}" alt="${name}" />
            <h3>${name}</h3>
          </article>
        </a>`


      }).join('');

hideLoading()

}

// `<a href="drink.html">
//           <article class="cocktail" data-id="${id}">
//             <img src="${image}" alt="${name}" />
//             <h3>${name}</h3>
//           </article>
//         </a>`