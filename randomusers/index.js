
import fetchuserdata from './utils/fetchUser.js'
import displayuserdata from './utils/displayUser.js';
import getElement from './utils/getElement.js';

let btn = getElement('.btn');





async function showUser() {

    let userdata = await fetchuserdata();

    displayuserdata(userdata)

}



window.addEventListener('DOMContentLoaded', showUser);
 btn.addEventListener('click', showUser);

