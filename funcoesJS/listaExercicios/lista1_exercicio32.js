/**
32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.



*/


function calculaMedArit(num){
  let media = 0
  for(let x = 0; x < num.length;++x){
    media += num[x]
  }
  media = media/num.length

  return ` A media das notas do vetor é ${media}`
}

console.log(calculaMedArit([1, 2, 3, 4, 5]))
