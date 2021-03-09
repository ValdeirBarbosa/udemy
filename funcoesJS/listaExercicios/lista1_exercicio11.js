

function EBissextoAno(ano){
if(ano%4 == 0 && ano%100 != 0){
  console.log(`${ano} é bissexto`)
  return true
}else if(ano%400 == 0 && ano %4 == 0){
          console.log(`${ano} é bissexto`)
          return true
      }else{
          console.log(`${ano} não é bissexto`)
  }
  return false
}

 EBissextoAno(2020)
