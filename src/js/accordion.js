export { openAccordionElement }


const ACCORDION_ELEMENTS = document.querySelectorAll('.accordion__content');
let datasetCurrent = '';

function openAccordionElement(dataset, target) {
/*   console.log(target); */
  
/*   console.log(dataset); */
  if(target.classList.contains('accordion__button')) {

  } else if(dataset != datasetCurrent) {
    closeAccordionElements();
    openElementInAccordion(dataset);
    datasetCurrent = dataset;
  } else {
    closeAccordionElements();
      datasetCurrent = "";
  }


}

function closeAccordionElements() {
  ACCORDION_ELEMENTS.forEach(element => {
    element.classList.add('accordion__content_close');
  })
}

function openElementInAccordion(target) {
  ACCORDION_ELEMENTS.forEach(element => {
    if(element.dataset.accordion === target.slice(-1)) {
      element.classList.remove('accordion__content_close');
    }
  })

}



