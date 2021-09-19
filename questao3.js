/* Crie uma função que recebe dois parâmetros, base e expoente, e 
retorne a base elevada ao expoente. */

const operation = function (param1, param2){
    let result = Math.pow(param1, param2)

    return result
}

console.log(operation(4,2))