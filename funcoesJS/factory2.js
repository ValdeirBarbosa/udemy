function criarproduto(nome, preco){
    return {
        nome,
        preco,
        //nao e preciso colocar nome:nome, ja esta explicito 
        desconto :0.1
    }
}

console.log(criarproduto('Desktop',5000.00))
console.log(criarproduto('Iphone XI',8000.00))