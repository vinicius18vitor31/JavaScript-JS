/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(parametro){
    return parametro ? true : false;    
};

//falso
isTruthy(undefined);
isTruthy(null);
isTruthy(NaN);
isTruthy(false);
isTruthy(-0);
isTruthy(0);
isTruthy('');


//verdadeiro
isTruthy('vinicius');
isTruthy(true);
isTruthy(Number);
isTruthy('0');
isTruthy({});
isTruthy(1);
isTruthy([]);
isTruthy(function() {});
isTruthy('-0');
isTruthy({a: 1, b: 2})


var carro = {marca: 'Gol', modelo: 'G3', placa: 'JPN 7311', ano: 2003 + ' / ' + 2004, cor: 'cinza', quantasPortas: 5, assentos: 5, quantidadePessoas: 0};

carro.mudarCor = function(cor){
    carro.cor = cor;
};
carro.mudarCor();


carro.obterCor = function(){
    return carro.cor = 'cinza';
};
carro.obterCor();


carro.obterModelo = function(){
    return carro.modelo;
};

carro.obterMarca = function(){
    return carro.marca;
};


carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo + '!';
}
carro.obterMarcaModelo();




carro.adicionarPessoas = function( numeroPessoas ){
    carro.quantidadePessoas += numeroPessoas;
    if(carro.adicionarPessoas === carro.assentos){
        return 'O carro está lotado!'
    }
    
}
carro.adicionarPessoas()
carro.adicionarPessoas()

console.log(carro.adicionarPessoas());