



function roundGrades(pont) {

    if (pont < 38 || isNaN(pont) ) {
        return `${pont} Reprovado `
    }
    for (let x = 1; x < 4; ++x) {
        let res = pont + x;
        if (res % 5 == 0) {
            pont = res
        }
    }
    return `${pont} Aprovado`
}

console.log(roundGrades(38))  // 40
console.log(roundGrades(48)) // 50
console.log(roundGrades(36))// 36
console.log(roundGrades(20)) // 20
console.log(roundGrades(47)) // 41
