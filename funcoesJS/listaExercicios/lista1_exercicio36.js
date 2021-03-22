/*

36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5

**/


function mutiplicaVet(vetor1, multiplicador){
      let result = []
  for(let x =0; x < vetor1.length;++x){
      vetor1[x] *= multiplicador
  }
   vetor1.forEach(item => {item>5?result.push(item * multiplicador): result.push(item) });
   return vetor1
}


// function MultiplicaMaiorQCinco(vetor1, multiplicador){
//
//   if(multiplicador >5){
//     for(let x =0; x < vetor1.length;++x){
//         vetor1[x] *= multiplicador
//     }
//   }
//
//   return vetor1
// }

console.log(mutiplicaVet([4,6,6,7,1],4))
