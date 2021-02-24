/**
 * Clousre é o escopo criado quando uma função e declarada
 * Esse escopo permite a função acessar e manipiular variveis externas à função.
 * 
 * Contexto léxico em acão 
 * */

 const x = "Global";

 function fora(){
     const x = 'local'

     function dentro(){
         return x
     }
     return dentro
 }

const minhaFuncao = fora()

console.log(minhaFuncao())