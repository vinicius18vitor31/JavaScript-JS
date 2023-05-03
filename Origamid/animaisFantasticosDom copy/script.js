// Retorne no console todas as imagens do site
const imagensImg = document.querySelectorAll('img');
console.log(imagensImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const animaisImg = document.querySelectorAll('img[src^="img/imagem"]')
console.log(animaisImg);
// Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);
// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
