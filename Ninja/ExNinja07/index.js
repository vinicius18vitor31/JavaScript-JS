/*
Crie um array com 5 itens (tipos variados).
*/
var itens = ['casa', 5, null, undefined, true]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem(adic){
    itens.push(adic);
    return itens;
};
console.log(itens)

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['vinicius', false, 85]));

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/

console.log(`O segundo elemento do segundo array é ${itens[5][1]}`);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O primeiro array tem ${itens.length} itens.`);

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log(`O segundo array tem ${itens[5].length} itens.`);

/*
Usando uma estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console . log (  'Números pares entre 10 e 20:'  ) ;
var num = 10;
while (num <= 20){
    num%2 === 0 ? console.log(num) : '';
    num++;
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console . log (  'Números ímpares entre 10 e 20:'  ) ;
var num = 10;
while (num <= 20){
    num%2 === 1 ? console.log(num) : '';
    num++;
}

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o intervalo:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números combinados entre 111 e 125, inclusive eles.
*/
console . log (  'Números pares entre 100 e 120:'  ) ;
for(var numero = 110; numero <= 120; numero++){
    numero % 2 === 0 ? console.log(numero) : '';
}

console.log('Números combinados entre 111 e 125')
for(var numero = 111; numero <= 125; numero++){
    if(numero % 2 !== 0){
        console.log(numero)
    };
};
