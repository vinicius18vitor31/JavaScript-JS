let num = [4, 5, 8, 9]

num.push(1) //acrecenta um número ao ultimo elemento, neste caso o 1
num.sort() //para colocar os números em ordem crescente
console.log(`Nosso vetor é o ${num} `)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(10)
if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}

