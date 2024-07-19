
import presentdata from "../src/presentDrinks.js";
import displayDrink from "./displaySingleDrink.js";

import { hideLoading,showLoading } from "../src/toggleLoading.js";

export default function passingtailurl(URL){

   let showdata = async ()=>{

        showLoading();

     try{

         let res = await fetch(URL);
         let data = await res.json();

        let showone = await data;
         
         presentdata(data);

       
     }
     catch(error){
        console.error('Error fetching data:', error);
     }
     
   }
   showdata();

}