// n! = n . (n – 1). (n – 2). (n – 3) ... 2,1.



function fatorialNum(num){
  let fat = 1;
  for (let x = 1; x<= num; ++x){
    fat = fat * (x)
    console.log(fat)
  }
  return fat
}


console.log(fatorialNum(1))

//  resposta do professor 
function fat(num){
    if(num == 0){
      return 1
    }else{
      return num*fat(num-1)
    }
}


console.log(fat(3))
