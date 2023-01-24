// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado){
    return !!dado;
}
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobreNome){
    nome = 'Vinicius';
    sobreNome = 'Souza';
    return `Meu nome é ${nome} ${sobreNome}!`
}
// Crie uma função que verifica se um número é par
function ePar(numero) {
    if(numero % 2 === 0){
        return 'Esse número é par!'
    }else{
        return 'Esse número é impar!'
    }
}
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipo(dado){
    return typeof dado;
}
console.log(tipo(25))
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.
addEventListener('click', function(){
    console.log('Vinicius Souza')
});
// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
precisoVisitar(20);
jaVisitei(20);
console.log(jaVisitei(20))
  
  