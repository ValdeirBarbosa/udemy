/*
21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
1) crianças com menos de 10 anos pagam R$80;
2) conveniados com idade entre 10 e 30 anos pagam R$50;
3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e
4) conveniados acima de 60 anos pagam R$130


*/


function planoSaude(idadeConveniado){
let mensal = 100
if(idadeConveniado <10){
  return [mensal += 80, idadeConveniado]
}else if(idadeConveniado >=10 && idadeConveniado <=30){
  return [mensal += 50,idadeConveniado]
}else if(idadeConveniado >30 && idadeConveniado <= 60){
  return [mensal += 95,idadeConveniado]
    }else{
      return [mensal += 80,idadeConveniado]
    }
}


console.log(planoSaude(7))
console.log(planoSaude(10))
console.log(planoSaude(20))
console.log(planoSaude(30))
console.log(planoSaude(31))
console.log(planoSaude(59))
console.log(planoSaude(90))
