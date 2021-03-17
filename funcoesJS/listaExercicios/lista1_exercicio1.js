/**
 * 01) Crie uma função que dado dois valores
 * (passados como parâmetros) mostre no console a soma, subtração,
 * multiplicação e divisão desses valores.

 */

 function calculo  (num1, num2){
    return `${num1}+${num2} = ${num1 + num2}\n
            ${num1}-${num2} = ${num1 - num2}\n
            ${num1}/${num2} = ${num1 / num2}\n
            ${num1}*${num2} = ${num1 * num2}`

 }
console.log(calculo(2,2))
