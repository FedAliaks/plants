export { changeColorButtonInService }

const SERVICE_BUTTONS = document.querySelectorAll('.service__button');
const arrayTypeServices = [];

function changeColorButtonInService(e) {
  const target = e.target;
  target.classList.toggle('button_active');
  const idTarget = target.innerText.toLowerCase();

  if(e.target.classList.contains('button_active')) {
    arrayTypeServices.push(idTarget);
  } else {
    arrayTypeServices.splice(arrayTypeServices.indexOf(idTarget), 1)
  }

  checkArrayTypeServices();
  addBlurEffect();
}

function checkArrayTypeServices() {
  if(arrayTypeServices.length > 2) {
    SERVICE_BUTTONS.forEach(button => {
      if(arrayTypeServices[0] === button.innerText.toLowerCase()) {
        button.classList.remove('button_active');
      };
    })
    arrayTypeServices.shift();
    addBlurEffect();
  }
}

function addBlurEffect() {
  const SERVICE_CARD_IMAGES = document.querySelectorAll('.services__card-image');

  SERVICE_CARD_IMAGES.forEach(card => {
    if(!arrayTypeServices.includes(card.dataset.idcard)) {
      card.classList.add('services__card-image_blur');
    } else {
      card.classList.remove('services__card-image_blur');
    }
  });

}
