/*
*  37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
*  como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
*  bem como a soma dos elementos.
*/
function progAr(nTermo,pTermo, razao){
  let cont = 0
  let soma= 0
  while(cont  <nTermo){
    console.log(pTermo)
    soma+=pTermo
    pTermo +=razao
    cont++
  }
  console.log(`###### SOMA PROG. ARITM. ${soma}`)
}

function progGeo(nTermo,pTermo, razao){
  let cont = 0
  let soma = 0
  while(cont  <nTermo){
    console.log(pTermo)
    soma+=pTermo
    pTermo *=razao
    cont++
  }
  console.log(`###### SOMA PROG. GEO. ${soma}`)
}


progAr(10,10, 15)
progGeo(10,5, 3)
