
import passingtailurl from "../cocktails/src/fetchDrinks.js";
import './src/searchForm.js';



const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a';

  window.addEventListener('DOMContentLoaded',function(){

    passingtailurl(URL) 

  })