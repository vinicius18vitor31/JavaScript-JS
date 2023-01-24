
/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calcularSoma`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calcularSoma(a, b) {
  return a + b;
};

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
var valor1 = 5;
var valor2 = 9;
console.log(`A soma de ${valor1} e ${valor2} é igul a ${sum(valor1, valor2)}`);

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/

console.log(`O nome da função que faz a soma é ${sum.name}`);

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName () {
  return 'Vinicius Souza'
}
console.log(showName())

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName = showName;

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuído a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log(`A função ${varShowName.name} retorna ${varShowName()}`)

/*
Crie uma função literal chamada `calculator`, que funciona assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai controlar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados ​​na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornará a frase:
  "Operação inválida."
*/
function calculador (operador) {
  return function (numero1, numero2) {
    var result;
    switch (operador) {
      case '+':
        result = numero1 + numero2;
        break;
      case '-':
        result = numero1 - numero2;
        break;
      case '*':
        result = numero1 * numero2;
        break;
      case '/':
        result = numero1 / numero2;
        break;
      case '%':
        result = numero1 % numero2;
        break;
      default:
        return 'Operação inválida.';
    }
    return `Resultado da operação: ${numero1} ${operador} ${numero2} = ${result}.`
  };
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
Parâmetro o operador de soma.
*/
var sum = calculador ('+');
/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
console.log(sum(5, 6));
/*
Agora, declare algumas variáveis ​​com os nomes `subtração`, `multiplicação`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var subtracao = calculador('-');
var multiplicacao = calculador('*');
var divisiao = calculador('/');
var restOperacao = calculador('%');
var qualquerCoisa = calculador('x');

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
sem consola.
*/
console.log(subtracao(5, 2));
console.log(multiplicacao(20, 8));
console.log(divisiao(15, 3));
console.log(restOperacao(50, 10));
console.log(qualquerCoisa(10, 20));