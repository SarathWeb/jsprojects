const products = [
    {
        id: 'rec43w3ipXvP28vog',
        title: 'high-back bench',
        company: 'ikea',
        image: 'https://www.course-api.com/images/store/product-1.jpeg',
        price: 9.99,
    },
    {
        id: 'rec4f2RIftFCb7aHh',
        title: 'albany table',
        company: 'marcos',
        image: 'https://www.course-api.com/images/store/product-2.jpeg',
        price: 79.99,
    },
    {
        id: 'rec8kkCmSiMkbkiko',
        title: 'accent chair',
        company: 'caressa',
        image: 'https://www.course-api.com/images/store/product-3.jpeg',
        price: 25.99,
    },
    {
        id: 'recBohCqQsot4Q4II',
        title: 'wooden table',
        company: 'caressa',
        image: 'https://www.course-api.com/images/store/product-4.jpeg',

        price: 45.99,
    },
    {
        id: 'recDG1JRZnbpRHpoy',
        title: 'dining table',
        company: 'caressa',
        image: 'https://www.course-api.com/images/store/product-5.jpeg',

        price: 6.99,
    },
    {
        id: 'recNWGyP7kjFhSqw3',
        title: 'sofa set',
        company: 'liddy',
        image: 'https://www.course-api.com/images/store/product-6.jpeg',
        price: 69.99,
    },
    {
        id: 'recZEougL5bbY4AEx',
        title: 'modern bookshelf',
        company: 'marcos',
        image: 'https://www.course-api.com/images/store/product-7.jpeg',
        price: 8.99,
    },
    {
        id: 'recjMK1jgTb2ld7sv',
        title: 'emperor bed',
        company: 'liddy',
        image: 'https://www.course-api.com/images/store/product-8.jpeg',
        price: 21.99,
    },
    {
        id: 'recmg2a1ctaEJNZhu',
        title: 'utopia sofa',
        company: 'marcos',
        image: 'https://www.course-api.com/images/store/product-9.jpeg',
        price: 39.95,
    },
    {
        id: 'recvKMNR3YFw0bEt3',
        title: 'entertainment center',
        company: 'liddy',
        image: 'https://www.course-api.com/images/store/product-10.jpeg',
        price: 29.98,
    },
    {
        id: 'recxaXFy5IW539sgM',
        title: 'albany sectional',
        company: 'ikea',
        image: 'https://www.course-api.com/images/store/product-11.jpeg',
        price: 10.99,
    },
    {
        id: 'recyqtRglGNGtO4Q5',
        title: 'leather sofa',
        company: 'liddy',
        image: 'https://www.course-api.com/images/store/product-12.jpeg',
        price: 9.99,
    },
];


let filterproducts = [...products];

console.log(filterproducts);

//putting  all products into the productcontainer:

let productcontainer = document.querySelector('.products-container');


function displayproducts() {

    if(filterproducts.length < 1){
        productcontainer.innerHTML = '<h6>No such products available</h6>'
        return;
    }

    let allproducts = filterproducts.map((product) => {

        const { company, id, image, price, title } = product;

        return `<article class="product" data-id=${id}>
        <img src="${image}"
            class="product-img img" alt="" />
        <footer>
            <h5 class="product-name">${product.title}</h5>
            <span class="product-price">${price}</span>
        </footer>
    </article>`

    }).join(' ')

    productcontainer.innerHTML = allproducts;


}

displayproducts();

//Companies Button add into the Html:

let companiescontainer = document.querySelector('.companies');

const Button = ['all', ...new Set(products.map((product) => product.company))];

companiescontainer.innerHTML = Button.map((btn) => {

    return `<button class="company-btn" data-id=${btn} > ${btn} </button>`

}).join(' ')


companiescontainer.addEventListener('click', function (e) {

    let el = e.target;

    if (el.classList.contains('company-btn')) {

        console.log(el.dataset.id);

        if (el.dataset.id == 'all') {
            filterproducts = [...products]
        }
        else {

            filterproducts = products.filter((product) => {
                return product.company == el.dataset.id
            });


        }
        displayproducts();
    }

})

//Filter by search :

let form = document.querySelector('.input-form');

let searchinput = document.querySelector('.search-input');

form.addEventListener('keyup', function () {

    let value = searchinput.value;



    filterproducts = products.filter((product) => {

          
        return product.title.toLowerCase().includes(value);
    })
  
    displayproducts();
})



