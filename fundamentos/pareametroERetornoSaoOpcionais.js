
// exemplo somente para mostrar que em Javascritp retorno de funções e parametros são opcionais 
function area(largura, altura) {
    const area = largura * altura;
    if (area > 20) {

        console.log(`Valor acima do permitido ${area} m²`);
    } else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 4, 5, 6, 9)) // quando se passa mais  parametros que a função solicita, é ignorado os parametros excentes 
console.log(area(5, 5))