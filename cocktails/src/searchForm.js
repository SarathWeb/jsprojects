import getElement from './getElement.js';

import presentDrinks from './presentDrinks.js';
import passingtailurl from './fetchDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = getElement('.search-form');
const input = getElement('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = input.value;
  console.log(value);
  if (!value) return;
  console.log(`${baseURL}${value}`);
  passingtailurl(`${baseURL}${value}`);
});

