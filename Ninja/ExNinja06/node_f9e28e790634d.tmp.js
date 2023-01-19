
var championship = 'Baiano';
console.log(championship);

var teams = ['Bahia', ' Atletico-Alagoinhas', ' Vitoria', ' Jacuipense', ' Juazeirense!'];
console.log(`Os times que estão participando do campeonato: ${teams}`);


function showTeamPosition(position){
    if(position < 1 || position > 5){
        return 'Não temos a informação do time que está nessa posição.'
    }
    return `O time que está na posição ${[position]} º é o ${teams[0]}`
}
console.log(showTeamPosition(1))

var numero = 30;
while (numero => 20){
    console.log(numero--)
}
console.log(numero)