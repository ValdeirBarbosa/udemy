/*

16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica O programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores



*/


function calculadora(num1,sinal,num2) {
  switch (sinal) {
    case '+':
    return num1+num2
      break;
    case '-':
      return num1-num2
      break;
    case '/':
      return num1/num2
      break;
    case '*':
      return num1*num2
      break;
    default:
      return `operação inválida`

  }

}

console.log(calculadora(1,'+',2))
console.log(calculadora(1,'-',2))
console.log(calculadora(1,'*',2))
console.log(calculadora(1,'/',2))
