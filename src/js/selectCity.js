import { cities } from "./cities";



const CITY_CARD = document.querySelector('.select-card');

function createCityCard(name) {

  const cityName = {};
  cities.forEach(item => {
    if(name === item.value) {
      console.log(item);
      createCard(item)
    }
  });




}

function createCard(cityName) {
  console.log(cityName);

  const card = document.createElement('div');
  card.classList.add('select-card__city');
  card.innerHTML = `<p class="select-card__title">City:</p>
  <p class="select-card__content">${cityName.city}</p>
  <p class="select-card__title">Phone:</p>
  <p class="select-card__content">${cityName.phone}</p>
  <p class="select-card__title">Office address:</p>
  <p class="select-card__content">${cityName.address}</p>`;

  const button = document.createElement('a');
  button.setAttribute('href', `tel:${cityName.phone}`);
  button.classList.add('select-card__button');
/*   button.innerHTML = `<a href='tel:${cityName.phone}' class="select-card__button-title">Call us</a>`; */
button.innerHTML = `<p class="select-card__button-title">Call us</p>`

  CITY_CARD.classList.add('select-card_active')

  CITY_CARD.innerHTML = '';
  CITY_CARD.append(card);
  CITY_CARD.append(button);



/*   CITY_CARD.appendChild('card');
  CITY_CARD.appendChild('button'); */



}


{/* <div class="select-card">
<div class="select-card__city">
  <p class="select-card__title">City:</p>
  <p class="select-card__content">Canandaigua, NY</p>
  <p class="select-card__title">Phone:</p>
  <p class="select-card__content">+1 585 393 0001</p>
  <p class="select-card__title">Office address:</p>
  <p class="select-card__content">151 Charlotte Street</p>
</div>
<div class="select-card__button">
  <p class="select-card__button-title">Call us</p>
</div>
</div> */}

export { createCityCard }