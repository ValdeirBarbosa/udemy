/*
*O this pode variar de acordo com o contexto de quem o chama
*
*/


const pessoa = {
    saudacao: 'Bom dia !',
    falar() {
        console.log(this.saudacao);
    }
}
pessoa.falar(); // resulttado =  Bom dia !

const falar = pessoa.falar;

falar(); // resultado : undefided

// conflito entre programação funcionao e orientação a objetos  para solução e usado o bind()

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // resulttado =  Bom dia !


// o bind nao altera a variavel que foi chamada neste caso de pessoa