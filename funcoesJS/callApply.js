function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco *(1-this.desc)* (1+imposto)}`
}

const produto = {
    nome:'Notebook',
    preco:4589,
    desc : 0.15,
    getPreco 
}


global.preco = 20
global.desc  = 0.1

console.log(getPreco())
console.log(produto.getPreco())


const carro = {preco:10000, desc:0.20}
console.log(getPreco.call(carro)) // diferença e da passagem dos parametros 

console.log(getPreco.call(carro,0.17,"u$")) // (contexto = carro , parametros = 0.17, parametro = "u$" )

console.log(getPreco.apply(carro,[20000,0.5])) { // difere passando o contexto e os paramretos em um array 
    
}