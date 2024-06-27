export { toggleAdaptiveMenu }


const ADAPTIVE_FIELD = document.querySelector('.adaptive__field');
const ADAPTIVE_MENU = document.querySelector('.adaptive__menu');
const BODY = document.querySelector('body');

function toggleAdaptiveMenu() {
  console.log('click burger');
  ADAPTIVE_FIELD.classList.toggle('open');
  BODY.classList.toggle('scroll-stop');
  ADAPTIVE_MENU.classList.toggle('adaptive__menu_open');
  document.querySelector("body > header > div > div.hamburger > span:nth-child(1)").classList.toggle('rotate_first');
  document.querySelector("body > header > div > div.hamburger > span:nth-child(2)").classList.toggle('line__close');
  document.querySelector("body > header > div > div.hamburger > span:nth-child(3)").classList.toggle('line__close');
  document.querySelector("body > header > div > div.hamburger > span:nth-child(4)").classList.toggle('rotate_last');
}