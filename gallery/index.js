

function getelement(selector) {

  let element = document.querySelector(selector);

  if (element) {
    return element;
  }
  throw new Error('selector is does not exists');

}

function Gallery(element) {

  this.container = element;

  this.modal = getelement('.modal')
  this.closebtn = getelement('.close-btn');
  this.prevbtn = getelement('.prev-btn');
  this.nextbtn = getelement('.next-btn');
  this.mainimg = getelement('.main-img');
  this.imagename = getelement('.image-name');
  this.modalimg = getelement('.modal-images');

  this.chooseimg = this.chooseimg.bind(this);

  this.modalimg.addEventListener('click', this.chooseimg);


  this.nextbtn.addEventListener('click', function () {

    let selected = this.modalimg.querySelector('.selected')

    selected.classList.remove('selected');

    let next = selected.nextElementSibling || this.modalimg.firstElementChild;

    next.classList.add('selected');

    this.setimage(next)

  }.bind(this))


  this.prevbtn.addEventListener('click', function () {

    let selected = this.modalimg.querySelector('.selected')

    selected.classList.remove('selected');

    let prev = selected.previousElementSibling || this.modalimg.lastElementChild;

    prev.classList.add('selected');

    this.setimage(prev)

  }.bind(this))




  this.closebtn.addEventListener('click', function () {


    this.modal.classList.remove('open');

  }.bind(this))

  this.list = [...element.querySelectorAll('.img')];

  this.container.addEventListener('click', function (e) {

    if (e.target.classList.contains('img')) {
      this.openmodal(e.target, this.list)
    }


  }.bind(this))

}

Gallery.prototype.chooseimg = function (e) {

  console.log(e.target);
  if (e.target.classList.contains('modal-img')) {
    let selected = this.modalimg.querySelector('.selected');
    selected.classList.remove('selected');
  }
  this.setimage(e.target);
  e.target.classList.add('selected')
}


Gallery.prototype.openmodal = function (targetelem, list) {

  this.setimage(targetelem);

  this.modal.classList.add('open');

  let listimg = list.map((image) => {

    console.log(image);
    return `<img
        src=${image.src}
        title=${image.title}
        id=${image.dataset.id}
        class="${targetelem.dataset.id === image.dataset.id ? 'modal-img selected' : 'modal-img'} "
        alt=""
      />`
  }).join('');

  this.modalimg.innerHTML = listimg;



}


Gallery.prototype.setimage = function (mainimg) {

  this.mainimg.src = mainimg.src;

  // console.log(list, 'list');

}










const gallery = new Gallery(getelement('.city'));



console.log(gallery);

console.log(document.lastModified, "modify");