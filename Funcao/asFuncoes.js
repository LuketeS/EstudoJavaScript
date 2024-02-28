//forma literal

function fun1(){

}

//em variável, usando funçao anônima

const fun2 = function () {

}

//em array

const array = [function (a, b) { return a + b}, fun1, fun2]

//em atributos de objetos

const obj = {}
obj.falar = function (){ 
    return 'Opa'
}
console.log(obj.falar())

//passar funçao como parametro para outro

function run(fun){
    fun()
}

run(function () {
 console.log("Executando...")   
})

//função pode retornar/conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)