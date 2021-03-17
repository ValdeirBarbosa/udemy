/*
31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.

*/


function listaNegativo(lista){
  let negativos = 0
  for(let x = 0 ; x < lista.length;++x){
    lista[x] < 0? negativos++: null
  }
  return `Quantidade de numeros negativos é ${negativos}`
}

console.log(listaNegativo([-1,-2,-3,-4,-5,-6,-7,-8,1,2,3,4,5,6,7,8,9]))
