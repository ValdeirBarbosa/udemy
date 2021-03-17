/*
30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor
*/


function maiorMenor(lista){
  let maior = lista[0]
  let menor = lista[0]

  for(let x = 0; x < lista.length;++x){
    maior < lista[x]? maior = lista[x]: null
    menor > lista[x]?menor = lista[x] : null
    }

    return ` O numero maior é ${maior} o numero menor é ${menor}`
  }


console.log(maiorMenor([10, 5, 7, 3, 1, 3, 11, 20, 6, 9]))
