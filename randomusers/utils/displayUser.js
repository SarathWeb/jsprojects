import getElement from "../utils/getElement.js";



let btnicon = document.querySelectorAll('.icon');

console.log(btnicon);


export default function displayuserdata(userdata) {

  let img = getElement('.user-img');
  let uservalue = getElement('.user-value')

  let usertitle = getElement('.user-title');

  img.src = userdata.image;

  uservalue.innerHTML = userdata.name;

  btnicon.forEach((btn, index) => {

btnicon[0].classList.add('active');

    btn.classList.remove('active')

   btn.addEventListener('click', function () {

    
      usertitle.innerHTML = `My ${btn.dataset.label} is`

      uservalue.innerHTML = userdata[btn.dataset.label];

      btnicon.forEach((revbtn)=>{
        revbtn.classList.remove('active')
      })


      btn.classList.add('active')

    })

  })






}