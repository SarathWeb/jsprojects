const data = [
    {
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        name: 'peter doe',
        job: 'product manager',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        name: 'susan doe',
        job: 'developer',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        name: 'emma doe',
        job: 'designer',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeius recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    

];



const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn');

let reviews = [...data];


container.innerHTML = reviews.map((slide, index) => {

    const { img, job, name, text } = slide;

    let position = 'next';

    if (index == 0) {
        position = 'active';
    }

    if (index == reviews.length - 1) {
        position = 'last';
    }

    return `<article class="slide ${position}">
         <img
           src="${img}"
           class="img"
           alt="peter doe"
         />
         <h4>${name}</h4>
         <p class="title">${job}</p>
         <p class="text">
           ${text}
         </p>
         <div class="quote-icon">
           <i class="fas fa-quote-right"></i>
         </div>
       </article>`
}).join('');

function slidechange(type) {


    let active = document.querySelector('.active');
    let last = document.querySelector('.last');

    let next = active.nextElementSibling;

    if (!next) {
        next = container.firstElementChild;
    }

    active.classList.remove('active');
    last.classList.remove('last');
    next.classList.remove('next');

    if (type == 'prev') {

        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        if (!next) {
            next = container.lastElementChild;
        }
        next.classList.remove('next');
        next.classList.add('last');
        return;
    }
    active.classList.add('last');
    last.classList.add('next');
    next.classList.add('active');
}

nextBtn.addEventListener('click', function () {

    slidechange();

})

prevBtn.addEventListener('click', function () {
    slidechange('prev')
})