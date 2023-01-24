function isTruthy(dado){
    return !!dado;
}
console.log(isTruthy(25))

function perimetroQuadrado(lado){
    return lado * 4;
}
console.log(perimetroQuadrado(8))

function nomeCompleto(nome, sobreNome){
    nome = 'Vinicius';
    sobreNome = 'Souza';
    return `Meu nome é ${nome} ${sobreNome}!`
}
console.log(nomeCompleto())

function ePar(numero) {
    if(numero % 2 === 0){
        return 'Esse número é par!'
    }else{
        return 'Esse número é impar!'
    }
}
console.log(ePar(19))

function tipo(dado){
    return typeof dado;
}
console.log(tipo(25))
/*
addEventListener('click', function(){
    console.log('Vinicius Souza')
});
*/
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(jaVisitei(20))