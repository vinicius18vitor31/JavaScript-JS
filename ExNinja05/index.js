/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var newArrey = [ 'Vinicius', 2, true , null, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
myArrey = function (arrey){
    return  arrey;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArrey(newArrey[1]));

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; eo
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myfunction2(arr, index){
    return arr[ index ];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArrey2 = ['ninja', 52.4, true, [1, 2, 3], {a: 2}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/


/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando uma frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
uma frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
uma frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?