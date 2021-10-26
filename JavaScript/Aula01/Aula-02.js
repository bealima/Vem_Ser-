//1) Crie um programa que imprima no console os números de 1 até 10;

for ( let i = 1 ; i <= 10 ; i++ ){
    console.log(i)
}

// 2) Crie um programa que, através de laços de repetição, percorra uma determinada lista com os seguintes números: [1, 2, 7, 10, 18]
//    e imprima no console a soma de todos os elementos, neste caso seria 38;

var numeros= [1, 2, 7, 10, 18]
var soma = 0
for ( let i = 0 ; i < numeros.length ; i++ ){
    soma = soma + numeros[i]
}
console.log(soma)

//3) Crie um programa que mostre um prompt para o usuário pedindo para selecionar uma das opções: 1 - Continuar perguntando / 2 - Parar de perguntar
  // se ele digitar algo diferente de 1 ou de 2 deve mostrar um alerta para ele informando o erro e deve solicitar novamente que escolha uma opção.

var resposta = prompt("selecionar uma das opções: \n 1 - Continuar perguntando  \n 2 - Parar de perguntar")
while (resposta !== "2"){
    resposta = prompt("selecionar uma das opções: \n 1 - Continuar perguntando  \n 2 - Parar de perguntar")
    if (resposta !== 1) {
        alert(resposta = prompt("ERRO !! selecione 1 ou 2 "))  
    }
}

//4) Crie um programa que atribua à uma varíavel e imprima no console ao final da execução os textos: 
//   'Sextou' ou 'Ainda não sextou' de acordo com a resposta do usuário, códigos 1 e 2 respectivamente;
