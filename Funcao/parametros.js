function soma() {
    let soma = 0
    for (i in arguments ) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,6))
console.log(soma(1,6,8))
console.log(soma(1,6,'teste'))
console.log(soma(1,6,'teste',false))