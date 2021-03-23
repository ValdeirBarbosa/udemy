/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

*/
function runString(strMaior, strMenor){
  let contemMaior = false
  let contemMenor = false
  strMaior = strMaior.toLowerCase()
  strMenor = strMenor.toLowerCase()
    // verifica se a String menor esta 100% contida na maior
  for(let x =0; x < strMenor.length;++x){
    contemMaior = strMaior.includes(strMenor.charAt(x))
  }
  // verifica se a String MAior esta 100% contida na menor
  for(let x =0; x < strMaior.length;++x){
      contemMenor = strMenor.includes(strMaior.charAt(x))
  }
  if(contemMaior === true && contemMenor === true){
    return true
  }else{
    return false
  }
                }



  console.log(runString('abCd', 'Abcb'))
  console.log(runString('abcder', 'dbcbe'))
  console.log(runString('abcder', 'dabcberrrrrrrrr'))
