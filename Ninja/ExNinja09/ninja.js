function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log( 'Na função `myFunction`, o primeiro número é', number1,'.');
    console.log( 'Na função `myFunction`, o segundo número é', number2,'.');
    return number1 + number2;
}
console.log(myFunction())

function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
        return number1 + number2;
    };
    console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    return sum();
}
myFunction2();

function myFunction3() {
    var number1 = 40;
    var number2 = 50;
    function sum() {
        return number1 + number2;
    };
    console.log( 'Na função myFunction3, number1 é igual a', number1 );
    console.log( 'A soma de 40 e 50 é igual a', sum() );
    return sum();   
}
myFunction3();


function calculador(valor1, valor2){
    
    return function (callback) {
        return callback(valor1, valor2)
    }
    
};
var sum = calculador(8, 3);

calculador();
console.log( 'O resultado da soma é:'  );
console.log(sum(function (valor1, valor2) {
    return valor1 + valor2;
}))

var subtracao = calculador(9, 5);
var multiplicacao = calculador(15, 3);
var divisao = calculador(8, 4);
var resDivisao = calculador(12, 7);

console.log( 'O resultado da subtração é:' );
console.log(subtracao(function (valor1, valor2) {
    return valor1 - valor2;
  }));

  console.log(multiplicacao(function(valor1, valor2){
    return valor1 * valor2;
  }));

  console.log(divisao(function(valor1, valor2){
    return valor1 / valor2;
  }));

  console.log(resDivisao(function(valor1, valor2){
    return valor1 % valor2;
  }));