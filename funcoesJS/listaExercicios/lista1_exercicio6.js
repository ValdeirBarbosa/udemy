/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
*  primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
*  retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(captalInicial, taxaDeJuros, tempoDeAplicacao) {



    let juros = captalInicial * (taxaDeJuros / 100) * tempoDeAplicacao
    //  console.log((montante*captalInicial)+tempoDeAplicacao)
    console.log(juros + captalInicial)



}


function jurosConposto(captalInicial, taxaDeJuros, tempoDeAplicacao) {

    let montante = captalInicial * ((1 + taxaDeJuros / 100) ** tempoDeAplicacao)
    console.log(montante)

}

jurosSimples(10000, 2, 3)    // 10600
jurosConposto(10000, 2, 3)   // 10612,08


/*
** feat Vinicius Maia Barbosa
*/