import { services } from "./services";

export { createServiceSection}


function createServiceSection (size) {
  console.log(size);
  const SERVICES_LIST_BLOCK = document.querySelector('.services__services-list');
  SERVICES_LIST_BLOCK.innerHTML = '';
  services.forEach(item => {
    SERVICES_LIST_BLOCK.appendChild(createCard(item, size));
  });
}


function createCard(item, size) {
  const div = document.createElement('div');
  div.classList.add('services__card');
  const img = document.createElement('img')
  if(size >= 1440) {
    img.setAttribute('src', item.image);
  } else {
    img.setAttribute('src', item.imageSmall);    
  }

  img.setAttribute('data-idcard', item.id);  
  img.setAttribute('alt', 'image');
  img.classList.add('services__card-image');
  div.appendChild(img);
  const title = document.createElement('h3');
  title.innerText = item.title;
  title.classList.add('services__card-title');
  div.appendChild(title);
  const description = document.createElement('p');
  description.innerText = item.description;
  description.classList.add('services__card-description');
  div.appendChild(description);
  return div;
}