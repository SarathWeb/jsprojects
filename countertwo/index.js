
function getelement(select){

  let element = document.querySelector(select);

  if(element){
   
    return  element;

  }
  throw new Error('please check the selector');

}


class Count{

 constructor(element,value){
//  console.log(element,value,this);

  this.counter = element;

  this.value = value;

  this.increasebtn = element.querySelector('.increase');

  this.decreasebtn = element.querySelector('.decrease');

  this.resetbtn = element.querySelector('.reset');

  this.valueDOM = element.querySelector('.value')

  this.valueDOM.textContent = this.value;

  this.increase = this.increase.bind(this);
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);

  this.increasebtn.addEventListener('click',this.increase);
  this.decreasebtn.addEventListener('click',this.decrease);
  this.resetbtn.addEventListener('click',this.reset);

 }
 increase(){

this.value++;

this.valueDOM.textContent = this.value;

 }
 decrease(){
this.value--;
this.valueDOM.textContent = this.value;

 }
reset(){
this.value = 0;
this.valueDOM.textContent = this.value;
}  
}


let  firstcounter = new Count(getelement('.first-counter'),1);

  let secondcounter = new Count(getelement('.second-counter'),10)













