
// no Js o fato de nao ter passado parametros implicitos
// na função e possivel passa-los e manipular eles atraves do arrary argumento
// existente dentro da  própria função.
function soma() {
    let soma = 0;
    for (let i in arguments) {
        soma += arguments[i];
    }
    return soma;
}
console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1, 1, 1, 1, 1, 1, 1, 1, 1, 1))

console.log(soma(10, 10, 'batata'));
// neste caso ele soma os numeros 
//interos e concatena com a string no 
//final devido a logica usada na função 
console.log(soma('salada ', 'de ', 'frutas')); // concatena os itens passados 
