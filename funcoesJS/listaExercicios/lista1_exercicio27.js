/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.



*/


function calcAltura(alt1, taxa1, alt2, taxa2){
  let anos = 0
  if(alt1 > alt2){
    while(alt1 >= alt2){
      alt1 = alt1+taxa1
      alt2 = alt2+taxa2
      anos++
    }
    return `A criança 1 é maior  a criança 2 será maior em ${anos} anos Altura criança 1: ${alt1} Altura criança 2: ${alt2}`
  }else{
    while(alt1 <= alt2){
      alt1 = alt1+taxa1
      alt2 = alt2+taxa2
      anos ++
    }
    return `A criança 1 é maior  a criança 2 será maior em ${anos} anos Altura criança 1: ${alt1} Altura criança 2: ${alt2}`
  }


}

console.log(calcAltura(140,5, 120,10))
