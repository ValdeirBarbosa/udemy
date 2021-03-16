/*
25) Escrever um programa para exibir os números de 1 até 50 na tela.
*/

function numeros(num){
  let listN = ``
  for(let x=1; x <= num; ++x ){
    if( x%10 == 0){
      listN +=` ${x}\n`
    }else{
      listN +=` ${x} `
    }
  }
  return listN
}

console.log(numeros(50))
