let vetor = [2,2,2]

function multiplicaVetor(vetor, multiplicador){
    let vetorResultado = []
    vetor.forEach(elemento => {
        vetorResultado.push(elemento * multiplicador)
    });

    return vetorResultado
}

console.log(multiplicaVetor(vetor, 2))
