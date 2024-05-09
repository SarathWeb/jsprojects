

let nav = document.querySelector('#nav');

window.addEventListener('scroll',function(){

    let windowheight = window.scrollY;

    let navheight = nav.getBoundingClientRect().height;

   if(windowheight > navheight){

    nav.classList.add('fixed-nav');
   }else{
    nav.classList.remove('fixed-nav');
   }
    
})

let linkscontainer = document.querySelector('.links-container');

let scrolllink = linkscontainer.querySelectorAll('.scroll-link');

 scrolllink.forEach((link)=>{
    link.addEventListener('click',function(e){
         
        e.preventDefault();

        let navheight = nav.getBoundingClientRect().height;

        

        let id = link.getAttribute('href').slice(1);

        let idelem = document.getElementById(id);

        let top;

        if(nav.classList.contains('fixed-nav')){

            top = idelem.offsetTop - navheight;
            

        }else{
            top = idelem.offsetTop - navheight-82;
        }

        window.scrollTo({
            top:top,behavior:'smooth'
        })
       
    })
 })
