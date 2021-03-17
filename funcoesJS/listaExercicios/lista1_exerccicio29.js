/**
  29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
  deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
  deles estão fora do intervalo, escrevendo estas informações.
*/


function contaIntervalo(listNumber){
    let nIntervalo = 0
    let  nForaIntervalo = 0
    for(let x = 0; x < listNumber.length; ++x){
      listNumber[x] >= 10 && listNumber[x]<=20 ?nIntervalo++ : nForaIntervalo++
    }
    return `${nIntervalo} numeros pertencem ao intervalo entre 10 e 20 e ${nForaIntervalo} nao pertecem a este intervalo`
}

let num = [10,11,12,13,20,22,23]

console.log(contaIntervalo(num))
