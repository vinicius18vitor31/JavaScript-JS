
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 37;
var idadeMulher = 29;
if(minhaIdade > idadeMulher){
    console.log('Minha idade é maior');
} else{
    if(minhaIdade === idadeMulher){
        console.log('Nossas idades são iguais');
    } else{
        console.log('Minha idade é menor');
    }
}
// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao) // 3
// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; 
console.log(!!nome);
var idade = 28;
console.log(!!idade);
var possuiDoutorado = false; 
console.log(!!possuiDoutorado);
var empregoFuturo;
console.log(!!empregoFuturo);
var dinheiroNaConta = 0;
console.log(!!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes');
}else{
    console.log('Chima tem mais habitantes');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
console.log()
// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
//Cão