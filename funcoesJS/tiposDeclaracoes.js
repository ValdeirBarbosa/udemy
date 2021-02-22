// Functions declaration 


function soma(x, y) {
    return x + y;
}// esta função aceita o hoisting


//fuction expression 
let soma = function (x, y) {
    return x + y;
}

//named funtion 
// o fato de estar nomeada ajuda somente na hora do debug 
const soma = function soma(x, y) {
    return x + y;
}