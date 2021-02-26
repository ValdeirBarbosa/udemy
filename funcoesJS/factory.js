// factory simples 
// o que é uma factory ? => É uma função que sempre retorna um objeto 

// factory simples

function criarPessoa(){
    return {
        nome:'Ana',
        sobrenome:'Silva'
    }
}

console.log(criarPessoa())