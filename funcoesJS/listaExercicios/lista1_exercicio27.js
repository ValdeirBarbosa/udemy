/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.



*/


function calcAltura(alt1, taxa1, alt2, taxa2){
  let resposta
  alt1 > alt2 && taxa1 >=taxa2?  resposta = `A criança 1 é maior e nao será alcançada`:null
  alt2 > alt1 && taxa2 >=taxa1?   resposta = `A criança 2 é maior e nao será alcançada`:null
  alt2 == alt1 && taxa2 ==taxa1?   resposta = `As criança são da mesma estatura e mesma taxa de crescimento!`:null

  switch (alt1 > alt2) {
    case true:
        for(let x=0; x <22;++x){
          alt1 = alt1 + taxa1
          alt2 = alt2 + taxa2
          if(alt2 >alt1){
              resposta = ` A criança 1 é maior porem a será alcançada em ${x} anos `
              break;
          }
        }
      break;
    case false:
        for(let x=0; x <22;++x){
          alt1 = alt1 + taxa1
          alt2 = alt2 + taxa2
          if(alt1 >alt2){
              resposta = ` A criança 2 é maior porem a será alcançada em ${x} anos `
              break
          }
        }
      break;
  }
  return resposta
}



// console.log(calcAltura(100, 4, 110, 2))
console.log(calcAltura(150, 2, 130, 4));
