/*
*  40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
*  modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
*  conceito B e de 9,0 a 10,0 o conceito A.
*
*/

function notasValida(notas){
  let conceito=[]
    for (let x = 0; x < notas.length; x++) {
      if(notas[x]<=10 && notas[x] >=9){
        conceito.push('A')
      }else if(notas[x] <=8.9 && notas[x] >=7){
        conceito.push('B')
      }else if(notas[x]<=6.9 && notas[x] >=5){
        conceito.push('C')
      }else if(notas[x] >=0 && notas[x] <= 4.9){
        conceito.push('D')
      }else{
        conceito.push(`Invalido`)
      }
    }

    return conceito
}


console.log(notasValida([10, 13, 9, 8.2, 2.5, 7.7, 6.8]))
