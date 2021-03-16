/**
23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.



*/

function media(cod, n1,n2,n3){
    let notas = [n1,n2,n3]
    notas = notas.sort()
    let media = (notas[0]*3 + notas[1]*3 + notas[2]*4)/10
    let status = ''
    media >= 5 ? status = 'APROVADO': status = 'REPROVADO'

    return `Aluno: ${cod} Notas:[${n1}]-[${n2}]-[${n3}] Média: ${media} ${status}`
}

console.log(media(100,2.8,6,3.5))
