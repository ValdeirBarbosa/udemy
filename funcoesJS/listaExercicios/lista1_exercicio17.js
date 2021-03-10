/*

17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
  A   10%
  B   15%
  C   20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

*/


function aumentoSalario(plano, salario) {
  plano = plano.toUpperCase(plano)
  switch (plano) {
    case 'A':
        return `R$ ${salario += salario*0.1}`
      break;

    case 'B':
      return `R$ ${salario += salario*0.15} `
      break;

    case 'C':
          return `R$ ${salario += salario*0.2}`
      break;

    default:
      return `O plano informado é invalido`
  }

}

console.log(aumentoSalario('a',1000))
console.log(aumentoSalario('B',1000))
console.log(aumentoSalario('C',1000))
console.log(aumentoSalario('y',1000))
