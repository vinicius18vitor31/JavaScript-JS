// Crie um objeto com os seus dados pessoais
const pessoa = {
    nome: 'Vinícius',
    sobreNome: 'Souza',
    idade: 37,
    possuiFaculdade: 'true',
}
console.log(pessoa)
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
pessoa.nomeCompleto = function() {
    return `${pessoa.nome} ${pessoa.sobreNome}`;
} 
console.log(pessoa.nomeCompleto())
// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }
  carro.preco = 3000;
  console.log(carro.preco)
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem
  const cachorro = {
    raca: 'Labrador',
    cor: 'preto',
    idade: 10,
    latir(sexo) {
        if(sexo === 'homem'){
            return 'latir'
        }else {
            return 'não latir'
        }
    }
  }
  console.log(cachorro)
  console.log(cachorro.latir('homem'))