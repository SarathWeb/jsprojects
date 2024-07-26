const starRating = document.querySelectorAll('.stars i');

starRating.forEach((star, index) => {
    star.addEventListener('click', function () {

        starRating.forEach((rate, ind) => {
            index >= ind ? rate.classList.add('active') : rate.classList.remove('active')
        })
    });
})
