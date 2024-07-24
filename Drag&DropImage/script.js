//DOM Elements
const boxes = document.querySelectorAll(".box"),
  image = document.querySelectorAll(".image");

 

//Loop through each boxes element
boxes.forEach((box,index) => {
  //When a draggable element dragged over a box element
  box.addEventListener("dragover", (e) => {
    e.preventDefault(); //Prevent default behaviour
   box.classList.add("hovered");
  // console.log(box,'box');
   
  });

  //When a draggable element leaves box element
  box.addEventListener("dragleave", () => {
    box.classList.remove("hovered");
  });

  image.forEach((images, ind) => {
    images.addEventListener('drag', (event) => {
        // Get the index of the clicked image
        box.addEventListener("drop", () => {
  
            box.classList.remove("hovered");
            console.log(ind,'ind',box);
            box.appendChild(image[ind]);
            
          });
    });
});
  //When a draggable element is dropped on a box elemen

});