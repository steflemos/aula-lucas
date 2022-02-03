//  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

//             0 1  2  3 4  5  6  7  8
let numeros = [2,3 ,5 ,8,10,44,33,12,5]
let cores = ['amarelo', 'azul', 'verde', 'laranja', 'preto', 'vermelho']
let nomes = ['rafael', 'izabella', 'ligia','roberto']
let valores = [3, 8, 2, 7, 4]

nomeExclui = 'izabella'
nomeAtuaaliza = 'bella'
indiceExclui = 0

for (i=0; i <nomes.length-1;i++){
    if(nomes[i]== 'izabella'){  
        indiceExclui = i
    }
}
nomes.splice(indiceExclui,1, nomeAtuaaliza)
console.log(nomes)

//valores.fill(10)

//let novoCores = cores.slice(1,4)

//let misturinha = nomes.concat(valores)
//let soma = Number (numeros [0]) + Number (numeros [numeros.length-1]);
  //  console.log(soma);

  // numeros.push (80)
 //numeros.shift ()
// valores.unshift (120)

 //let indice = nomes.lastIndexOf('ana')

 /*for(i=0; i < 4; i++){

     numeros.pop ()
    }*/

 //let vetor = (numeros)
 // console.log (vetor)
 // console.log (valores)
 //console.log (indice)
// console.log (misturinha)
 //console.log (valores)
 //console.log (novoCores)