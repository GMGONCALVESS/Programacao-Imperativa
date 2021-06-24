let numerosPrimos = [2,3,5,7,11]
let numeros = [0,1,4,6,8,9,10,...numerosPrimos]
console.log(numeros)

function maiorNumero(a){
    let mini = Math.min(...a)
    console.log(mini)
}

maiorNumero(numeros)
