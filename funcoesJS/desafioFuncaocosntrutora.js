
function criaPessoa(nome){

    this.nome = nome;

    this.falar =  function (){
        console.log(`Saudações meu nome é ${nome}`)
    }
}

const p =  new criaPessoa('Valdeir')
p.falar()
