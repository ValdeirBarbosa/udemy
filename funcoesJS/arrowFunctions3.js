
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global);

const obj = {}

comparaComThis = comparaComThis.bind(obj); // por contra do bind o this nao e mais escopo global 

/**
 * O this de uma função arrow '()==>{}'   
 * é associado ao contexto no qual a função arrow foi definida
 * foi escrita nao tem variação mesmu usando o bind()
 */


comparaComThis(global);

let comparaComArrow = param => console.log(this === param);

comparaComThis(global)


comparaComArrow(module.exports) // true 