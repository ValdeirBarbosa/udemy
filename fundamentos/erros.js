function trataErroELancar(erro) {
    //throw new Error('Deu ruim  ')
    throw {
        nome: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function imprimeNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (error) {
        trataErroELancar(error);
    }
}
const obj = { name: 'valdeir' }
// imprimeNomeGritado(obj)





const imprimeResultado = (nota) => {

    if (!isNaN(nota)) {
        if (nota > 7) {
            console.log("Aprovado!")
        } else {
            console.log("Reprovado!")
        }

    } else {
        console.log(`${nota} nao e considerado um numero`)
    }

}

imprimeResultado(512)
