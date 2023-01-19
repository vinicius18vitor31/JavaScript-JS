/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Baiano';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhidos, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução dessa
desafio.
*/
var teams = ['Bahia', ' Atletico-Alagoinhas', ' Vitoria', ' Jacuipense', ' Juazeirense!'];

console.log(`Os times que estão participando do campeonato: ${teams}`);

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME]";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o tempo
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o tempo estiver entre
    os 5 primeiros.
    - Se não houver tempo para a posição passada, deverá retornar a mensagem:
    "Não temos a informação do tempo que está nessa posição."
*/
function showTeamPosition(position){
    if(position < 1 || position > 5){
        return 'Não temos a informação do time que está nessa posição.'
    };
    return `O time que está na posição ${[position]} º é o ${teams[0]}`
};
console.log(showTeamPosition(1));

/*
Escolha 4 vezes do campeonato selecionado e mostre a posição dele, usando um
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(5));
console.log(showTeamPosition(3));
console.log(showTeamPosition(2));
console.log(showTeamPosition(6));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "enquanto".
*/


/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe um cor por parâmetro, do tipo string. Exemplo: "vermelho";
    - Escolha 5 cores que serão transformadas do nome da cor para o seu
    hexadecimal equivalente (pode ser qualquer tom);
    - Usando um switch de estrutura, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre os selecionados, mostre
    uma frase:
    "Não temos o hexadecimal equivalente para [COR]."
*/
// ?

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/