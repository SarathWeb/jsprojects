

export default function getElement(selectElement){

  let selector = document.querySelector(selectElement);

  if(selector){
    return selector;
  }

  throw new Error('Selector is does not exist in document');


}