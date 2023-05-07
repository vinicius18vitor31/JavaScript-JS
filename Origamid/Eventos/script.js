const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

//img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type)
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function ativarLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}

//linkExterno.addEventListener('click', ativarLinkExterno);


const h1 = document.querySelector('h1');

function verEvent(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', verEvent);
h1.addEventListener('mousemove', verEvent);