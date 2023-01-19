
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

var numero = 20;
while (numero <= 30){
    console.log(numero++)
}
console.log(numero)

    function convertToHex(cor){
        var hexa;
        switch (cor){
            case 'vermelho':
                hexa = '#FF0000';
                break;
            case 'azul':
                hexa = '#0000FF';
                break;
            case 'branco':
                hexa = '#FFFFFF';
                break;
            case 'preto':
                hexa = '#000000';
                break;
            case 'amarelo':
                hexa = '#FFFF00';
                break
            default:
                return `Não temos o hexadecimal equivalente para ${cor}.`
        }
        return `O hexadecimal para a cor ${cor} é ${hexa}.`; 
    }
    
console.log(convertToHex('amarelo'))