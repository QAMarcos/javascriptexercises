/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

// link de ajuda: https://ead.pucpr.br/blog/juros-simples-compostos-formula

// OBS: For this code bellow work, you have to fill the parameters like this Examples : capital = 1.000 | months  = 2  | fees = 5

const simpleFeesCalculation = function (capital, fees, months) {

    let result = capital * (fees / 100) * months
    return result


}

// OBS: For this code bellow work, you have to fill the parameters like this Examples : initialvalue = 1.000 | monthlyFees  = 2 (%) | aplicationTime = x (months)

const compoundsFeesCalculation = function (initialValue,monthlyFees,aplicationTime) {

let compoundAmount = initialValue * (1 + (monthlyFees / 100)) ** aplicationTime

return compoundAmount.toFixed(2)


   
} 

console.log(simpleFeesCalculation(100,100,1))

console.log(compoundsFeesCalculation(1000,10,2))





