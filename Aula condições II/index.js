var idade = 77
console.log(`Voçe tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não Vota!!`)
} else{
    if (idade >= 16 && idade < 18) {
        console.log(`Voto Opcional!!`)
    } else {
        if (idade >= 18 && idade <= 67) {
            console.log(`Voto Obrigatório!!`)
        } else {
            console.log(`Voto Opcional!!`)
        }
    }
}