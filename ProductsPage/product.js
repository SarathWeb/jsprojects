const productDOM = document.querySelector('.product');
const url = 'https://www.course-api.com/javascript-store-single-product';

let productfetch = async () => {

    productDOM.innerHTML = '<h1>Loading...</h1>'

    let params = new URLSearchParams(window.location.search);

    let id = params.get('id');

    response = await fetch(`${url}?id=${id}`);


   data = await response.json();
    return data;

}

function addingproducts(data) {

    console.log(data);

    const {id,fields} = data;

    const {name:title,description,company,image,colors,price} = fields;

    const {url:img} = image[0];

    colorsList = colors.map((clr)=>{
        return `<span class="product-color" style="background: ${clr}"></span>`
    }).join('')


    productDOM.innerHTML = `<div class="product-wrapper">
    <img src="${img}" class="img" alt="${title}" />
    <div class="product-info">
      <h3>${title}</h3>
      <h5>${company}</h5>
      <span>${price / 100}</span>
      <div class="colors">
        ${colorsList}
        
      </div>
      <p>
       ${description}
      </p>
      <button class="btn">add to cart</button>
    </div>
  </div>`;

}


const displayproducts = async () => {
    let data = await productfetch();

   addingproducts(data)
}

displayproducts();