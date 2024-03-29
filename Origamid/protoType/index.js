// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa (nome, sobreNome, idade) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.idade = idade;
};

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobreNome}`
}

const vinicius = new Pessoa('Vinícius', 'Souza', 37);
// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
