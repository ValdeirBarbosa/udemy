// estrategia 1 para gerar valor padrão 
// function soma1(a, b, c) {
//     a = a || 1 // pega  o valor atribuido ou o valor padrão que neste caso é 1 
//     b = b || 1 // pega  o valor atribuido ou o valor padrão que neste caso é 1 
//     c = c || 1 // pega  o valor atribuido ou o valor padrão que neste caso é 1 

//     return (a + b + c);
// }

// console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0));

// function soma2(a, b, c) {

//     a = a !== undefined ? a : 1
//     b = 1 in arguments ? b : 1// b = 1 porque e o segundo indec do arguments
//     c = isNaN(c) ? 1 : c

//     return a + b +c

// }

// console.log(soma2(10, 10, 300));



function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3(10, 10, 300));