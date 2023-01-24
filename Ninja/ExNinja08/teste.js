
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

console.log(`A função ${varShowName.name} retorna ${varShowName()}`)

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
  
  var sum = calculador ('+');

  console.log(sum(5, 6))

  var subtracao = calculador('-');
  var multiplicacao = calculador('*');
  var divisiao = calculador('/');
  var restOperacao = calculador('%');
  var qualquerCoisa = calculador('x');

  console.log(subtracao(5, 2));
  console.log(multiplicacao(20, 8));
  console.log(divisiao(15, 3));
  console.log(restOperacao(50, 10));
  console.log(qualquerCoisa(10, 20));