var pessoa = {};

var pessoa = {nome: 'Vinicius', sobreNome: 'Souza', sexo: 'Masculino', idade: 37, altura: 1.77, peso: 110, andando: "false", caminhouQuantosMetros: 0};

pessoa.felizAniversario = function(){
    pessoa.idade++;
}
pessoa.felizAniversario()

pessoa.andar = function(metros = 1){
    pessoa.caminhouQuantosMetros += metros;
    pessoa.andando = true;
}
pessoa.andar();

pessoa.parar = function(){
    pessoa.andando = false;
}
pessoa.parar();

pessoa.nomeCompleto = function(){
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobreNome + '!';
}
console.log(pessoa.nomeCompleto)

pessoa.mostrarIdade = function(){
    return 'Olá! Eu tenho ' + pessoa.idade + 'idade!';
}
pessoa.mostrarIdade()

pessoa.mostrarPeso = function(){
    return 'Olá! Eu tenho ' + pessoa.peso + 'Kg!';
}
pessoa.mostrarPeso()

pessoa.mostrarAltura = function(){
    return 'Minha altura é ' + pessoa.altura + 'm!';
}
pessoa.mostrarAltura()

console.log(pessoa)
