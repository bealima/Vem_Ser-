//1) Crie uma função que inverta um número; (NÃO pode usar a função revert())
//    Exemplo: minhaFuncao(370914) // retorno esperado: 419073;

var numero = 123456
function revertedora(numero){
  let numeroStr = numero.toString()
  let numeroStrSplit = numeroStr.split("")
  let numeroReverso = []
  for (let i = numeroStrSplit.length -1; i >= 0; i-- ){
    numeroReverso.push(numeroStrSplit[i])
    numero = parseInt(numeroReverso.join(""))
  }
  console.log (numero)
}
revertedora(numero)

// 2) Crie uma função que recebe um array de números e encontre o segundo menor e o segundo maior número do array
//    e imprima eles no console (imprime somente 1 número se ele for o segundo menor e o segundo maior também);
//    Exemplo: minhaFuncao( [1, 3, 5, 7, 9] ) // neste caso, loga: 3  e loga:  7
//    Exemplo: minhaFuncao( [1, 3, 5] ) // neste caso, loga: 3

   var numeros  = [44, 52, 15, 1, 23];

   function segundoMenorMaior(numeros){
     numeros.sort(function(a, b) {
       return a - b;
     });
     console.log(numeros[1])
     numeros.pop
     console.log(numeros.slice(-1))
   
   }
   segundoMenorMaior(numeros)

// 3) Crie uma função que recebe uma string e coloca todas as primeiras letras em maiúsculo;
//    Exemplo: minhaFuncao( 'hoje faremos o trabalho em dupla, que legal - sqn' )
//  neste caso retorna: 'Hoje Faremos O Trabalho Em Dupla, Que Legal - Sqn';

 var nome = ("nossos nomes são ana e suzana")
 let teste = nome.split(" ")
 var nome2=[]
 function primeiraLetraMaiuscula(teste){
   for (let i = 0; i < teste.length; i++ ){
     let palavra = (teste[i].charAt().toUpperCase() + teste[i].substr(1))
     nome2.push(palavra)
     nome= nome2.join(" ")
   }
   console.log(nome)
 }
 primeiraLetraMaiuscula(teste)
 