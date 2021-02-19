const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0, 0.3, 4.8, 9.9]

// SEM CALLBACK
const  notasBaixas1 = []
for (let nota in notas) {
    if (notas[nota] < 7) {
        notasBaixas1.push(notas[nota]);
    }
}

console.log(notasBaixas1)


// COM CALLBACK

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7;
})

console.log(notasBaixas2)

// callback e arrow function 
const notasMenoresQueSete = nota=> nota < 7;
const notasBaixas3 = notas.filter(nota => nota < 7);
//const notasBaixas3 = notas.filter(notasMenoresQueSete); outra forma de uso mesmo resultado 

console.log(notasBaixas3)