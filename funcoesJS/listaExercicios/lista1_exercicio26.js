/*
  26) Fazer um programa para encontrar todos os pares entre 1 e 100.
*/


function numerosPares(){
  let nPares = []
  for (let x=1; x<=100; ++x){
    x%2 == 0 ? nPares.push(x):null
  }
  return nPares
}


console.log(numerosPares(100))
