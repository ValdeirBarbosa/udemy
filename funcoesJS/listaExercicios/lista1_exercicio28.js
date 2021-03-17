/*
28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.


*/


function parOuImpar(numberList){
  let pares = [],impares = []
  for(let x = 1 ; x < numberList.length;++x){
    numberList[x] % 2 == 0? pares.push(numberList[x]) : impares.push(numberList[x])
  }
  return ['Pares:',pares,'Impares:',impares]

}



console.log(parOuImpar([1,2,3,4,5,6,7,8,9,10]))
