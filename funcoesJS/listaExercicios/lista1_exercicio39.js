/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar.


*/



function switchVetor(vet1, vet2){
  for(let x=0; x < vet1.length;++x){
      vet1[x] = vet1[x]+vet2[x]
      vet2[x] = vet1[x]-vet2[x]
      vet1[x] = vet1[x]-vet2[x]


  }
  return ['Vetor1',vet1,'vetor2',vet2]
}


console.log(switchVetor([1,2,3],[0,9,8]))
