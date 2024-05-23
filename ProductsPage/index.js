const url = 'https://www.course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center');


let productfetch = async () => {

    response = await fetch(url);

    data = await response.json();
    return data;

}

function addingproducts(data) {

    productcontainer = data.map((items) => {

        const { id, fields } = items;

        const { name: title, price, image } = fields;

        const { url: img } = image[0]

        return `<a class="single-product" href="products.html?id=${id}&name=john&age=25">
        <img src="${img}" class="single-product-img img" alt="${title}" />
        <footer>
          <h5 class="name">${title}</h5>
          <span class="price">$${price}</span>
        </footer>
      </a>`

    }).join('')

    productsDOM.innerHTML = `<div class="products-container">
       ${productcontainer}
        
      </div>`

}


const displayproducts = async () => {
    let data = await productfetch();

    addingproducts(data)
}

displayproducts();