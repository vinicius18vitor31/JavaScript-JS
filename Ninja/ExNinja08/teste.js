
var sum = function calcularSoma(a, b) {
    return a + b;
};
var valor1 = 5;
var valor2 = 9;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${sum(valor1, valor2)}`)

console.log(`O nome da função que faz a soma é ${sum.name}`)

function showName () {
    return 'Vinicius Souza'
}
console.log(showName())

var varShowName = function showName() {
    return 'Vinicius Souza'
}

console.log(`A função ${varShowName.name} retorna ${showName()}`)

function calculator (operator) {
    return function (number1, number2) {
      var result;
      switch (operator) {
        case '+':
          result = number1 + number2;
          break;
        case '-':
          result = number1 - number2;
          break;
        case '*':
          result = number1 * number2;
          break;
        case '/':
          result = number1 / number2;
          break;
        case '%':
          result = number1 % number2;
          break;
        default:
          return 'Operação inválida.';
      }
      return `Resultado da operação: ${number1} ${operator} ${number2} = ${result}.`
    };
  }
  
  var sum = calculator ('+');

  console.log(sum(5, 6))