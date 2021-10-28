//1) Crie uma função que recebe como parâmetro um caracter e um array de caracteres e que remova todas as ocorrências daquele caracter no array; 
   
   var ctr = "c"
   var arr = ["h","c","e","c","l","c","l","c","o","c","!"]
   
   function removerCaracter(ctr,arr){
       while (arr.indexOf(ctr) !== -1 ) {
           let n = arr.indexOf(ctr);
           arr.splice(n,1);
       }
     return console.log(arr);
   }
   removerCaracter(ctr,arr);

2) Crie uma função que receba como parâmetro um array de números e retorne um array ordenado (NÃO pode usar a função array.sort());
   // ex. funcaoOrdenaArray( [4, 7, 3, 0] ) ===> retorna o array [ 0, 3, 4, 7 ] 

var desordem = [8, 5, 2, 9, 0, 4]

function ordenadora(desordem){

}


//3) Crie uma função que recebe como parâmetro 2 arrays (quaisquer que sejam) e retorne uma concatenação destes 2 arrays ("soma");

var lista1 = [1,2,3]
var lista2 = [4,5,6]

function concatenadora(lista1, lista2){
    return console.log(lista1.concat(lista2));
}
concatenadora(lista1,lista2);

//4-
//a) Tendo uma lista vazia [], crie uma função que recebe um elemento qualquer como parâmetro e que adiciona esse elemento à lista;

var lista = []
var x = ""
var n = ""
function growList(lista) {
  x = prompt("Quantos itens você quer adicionar na lista?")
  for (let i = 1; i <= x; i++ ){
    n = prompt(`Digite o ${i}° da lista:`);
    lista.push(n);
  }
  console.log(lista);
}
growList(lista)

//b) Crie outra função para remover o último elemento da lista;

function reduceList(lista){
    lista.pop()
    return console.log(lista)
}
reduceList(lista)
