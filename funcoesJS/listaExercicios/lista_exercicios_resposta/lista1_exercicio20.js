





function sacarDinheiro(valor){
let nCem  = Math.floor(valor/100)
let nCinq = Math.floor(valor%100/50)
let nDez  = Math.floor((valor%100%50)/10)
let nCinc = Math.floor(valor%100%50%10/5)
let nUm   = Math.floor((valor%100%50%10%5)/1)


let cedulas = ``

 if(nCem !=0){
   nCem >1? cedulas +=`${nCem} cédulas de R$100,00\n`: cedulas +=`${nCem} cédula de R$100,00\n`
 }
 if(nCinq !=0){
   nCinq >1? cedulas +=`${nCinq} cédulas de R$50,00\n`: cedulas +=`${nCinq} cédula de R$50,00\n`
 }
 if(nDez !=0){
   nDez >1? cedulas +=`${nDez} cédulas de R$10,00\n`: cedulas +=`${nDez} cédula de R$10,00\n`
 }
 if(nCinc !=0){
   nCinc >1? cedulas +=`${nCinc} cédulas de R$5,00\n`: cedulas +=`${nCinc} cédula de R$5,00\n`
 }
 if(nUm != 0){
   nUm >1? cedulas +=`${nUm} cédulas de R$1,00\n`: cedulas +=`${nUm} cédula de R$1,00`
 }

return cedulas

}


console.log(sacarDinheiro(1343))
