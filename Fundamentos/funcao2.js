//armazenando uma função em uma variável

const imprimirSoma = function (a, b) {
    console.log(a + b)    
}

imprimirSoma(2, 3)

// armazeando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a + b
}

console.log(soma( 3, 5))

//retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(8, 4))