
var itens = ['casa', 5, null, undefined, true];
console.log(itens)

function addItem(adic){
    itens.push(adic);
    return itens;
};
console.log(itens)
console.log(addItem(['vinicius', false, 85]));

console.log(`O segundo elemento do segundo array é ${itens[5][1]}`);

console.log(`O primeiro array tem ${itens.length} itens.`);

console.log(`O segundo array tem ${itens[5].length} itens.`)

/*
Usando uma estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
console . log (  'Números pares entre 10 e 20:'  ) ;
*/
console.log('Números pares entre 10 e 20')
var num = 10;
while (num <= 20){
    num%2 === 0 ? console.log(num) : '';
    num++;
}

console.log('Números impares entre 10 e 20')
var num = 10;
while (num <= 20){
    num%2 === 1 ? console.log(num) : '';
    num++;
}
/*
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números combinados entre 111 e 125, inclusive eles.
*/
console.log('Números pares entre 10 e 20')
for(var numero = 110; numero <= 120; numero++){
    numero % 2 === 0 ? console.log(numero) : '';
}

console.log('Números pares entre 111 e 125')
for(var numero = 111; numero <= 125; numero++){
    if(numero % 2 !== 0){
        console.log(numero)
    } 
}

