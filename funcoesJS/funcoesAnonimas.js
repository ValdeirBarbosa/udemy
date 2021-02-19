/**
 * #########################################
 * TODA ARROW FUNCTION É UMA FUNÇÃO ANONIMA
 * #########################################
 */


const soma = function (x, y) {
    return x + y;
}

const imprimeResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimeResultado(3, 4);
imprimeResultado(3, 4, soma);

imprimeResultado(3, 4, function (x, y) {  // função anonima como parametro de uma função 
    return x - y;
});

imprimeResultado(3, 4, (x, y) => x * y); // arrow function como parametro de uma função


const pessoa = {
    falar: function () { // função aninima como parametro de um objeto
        console.log(`Saudações!`);
    },

    falarBomdia() { // função aninima como parametro de um objeto
        console.log(`Bom dia !`); // nova versão do ES6 é possivel usar desta forma a função anonima como atributo
    }
}

pessoa.falar();
pessoa.falarBomdia();