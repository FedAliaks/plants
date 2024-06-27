import './styles.scss';
import { toggleAdaptiveMenu } from './js/burger'
import { createServiceSection  } from './js/createServicesList';
import {changeColorButtonInService} from './js/blurEffect';
import { openAccordionElement } from './js/accordion';
import { createCityCard  } from './js/selectCity';


let isFlag;



createServiceSection(window.innerWidth);

window.addEventListener('resize', (e) => {
  let size = e.target.outerWidth;
  const flagTemp = size >= 1440 ? 'big' : 'small';

  if(flagTemp != isFlag) {
    createServiceSection(size);
    isFlag = flagTemp;
  }

});


//burger
const HAMBURGER = document.querySelector('.hamburger');
const FIELD_MENU_OUT = document.querySelector('.adaptive__field');

HAMBURGER.addEventListener('click', toggleAdaptiveMenu);

FIELD_MENU_OUT.addEventListener('click', (e) =>{
  if(e.target.classList.contains('adaptive__field') && FIELD_MENU_OUT.classList.contains('open')) {
    console.log('click out');
    toggleAdaptiveMenu();
  }
});


FIELD_MENU_OUT.addEventListener('click', (e) => {
  if(e.target.dataset.item === 'item') {
    toggleAdaptiveMenu();
  }
});


//blur effect
const SERVICES_BUTTON_BLOCK = document.querySelector('.services__button-block');

SERVICES_BUTTON_BLOCK.addEventListener('click', (e) => {
  const target = e.target;
  if(target.classList.contains('service__button')) {
    changeColorButtonInService(e);
  }
})

//accordion
const PRICE_BUTTONS = document.querySelector('.prices__button-section');

PRICE_BUTTONS.addEventListener('click', (e) => {
/*   console.log(e.target.closest('.accordion'));
  console.log('dataset: ' + e.target.closest('.accordion').dataset.set); */
  if(e.target.closest('.accordion').dataset.set) {
    console.log(e.target);

    openAccordionElement(e.target.closest('.accordion').dataset.set, e.target);
  }
});


//select section

const SELECT_HEADER = document.querySelector('.select__header');
const SELECT_BODY = document.querySelector('.select__body');
const SELECT_ITEMS_ARRAY = document.querySelectorAll('.select__item');
const SELECT_CITY_NAME = document.querySelector('.contact__button-name');
const SELECT_CITY_ARROW = document.querySelector('.contact__arrow');

SELECT_HEADER.addEventListener('click', toggleSelectMenu);



function toggleSelectMenu() {
  SELECT_BODY.classList.toggle('select__body_active');
  SELECT_HEADER.classList.toggle('select__head_active');
  SELECT_CITY_ARROW.classList.toggle('contact__arrow_transform');
}

SELECT_BODY.addEventListener('click', (e) => checkChooseCity(e));

function checkChooseCity(event) {
  if(event.target.classList.contains('select__item')) {
    createCityCard(event.target.dataset.city);
    SELECT_CITY_NAME.innerHTML = event.target.innerText;
    toggleSelectMenu();
  }
}











