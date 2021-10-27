// 1) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
//     Esse funcionário foi contratado em 2016, com salário inicial de R$1000,00;
//     A cada ano o funcionário recebe um aumento de 1,5% sobre seu salário inicial;
//     A partir de 2018, os aumentos salariais sempre passaram a ser o dobro do percentual do ano anterior
//     Faça um programa que determine o salário atual desse funcionário (2021);

var salarioInicial = 1000
var salarioAumentado = 0
var percentualAumento = 1.5
for (let i = 2017; i <= 2021; i ++ ) {

    salarioAumentado = salarioInicial + (salarioInicial * (percentualAumento / 100))
    percentualAumento = percentualAumento * 2
}
console.log(salarioAumentado)



// 2) Faça um programa que calcule a soma dos primeiros 50 números pares;
var soma = 0
for (var i = 2 ; i <= 100; i= i+2 ){
    soma= soma + i
}
console.log(soma)

// 3) Faça um programa onde o usuário possa escolher qual a tabuada que se deseja ver. Exiba (console) a tabuada desse número de 1 a 10;

var n = prompt("Você deseja ver a tabuada de qual número?")
var r = 0

for (let i = 1 ; i <= 10 ; i ++) {
    r = i * n 
    console.log (`${i} x ${n} = ${r}`)
}


// 4) Faça um algoritmo que apresente o quadrado de cada um dos números pares entre 1 e 100;
var quadrado = 0
for (let i = 2 ; i <= 100; i= i+2 ){
    quadrado = i ** 2
    console.log(quadrado)
}

// 5) Faça um algoritmo que apresente o quadrado de cada um dos números ímpares entre 100 e 1; (Decremento)
var quadrado = 0
for (let i = 99 ; i >= 1; i= i-2 ){
    quadrado = i ** 2
    console.log(quadrado)
}

// 6) Leia 5 valores numéricos do usuário e calcule seu somatório utilizando o laço Do While;
var n1 = parseFloat(prompt("Digite o primeiro número: "))
var n2 = parseFloat(prompt("Digite o segundo número: "))
var n3 = parseFloat(prompt("Digite o terceiro número: "))
var n4 = parseFloat(prompt("Digite o quarto número: "))
var n5 = parseFloat(prompt("Digite o quinto número: "))
var numeros = [n1,n2,n3,n4,n5]
var i = 0
var soma = 0 
do
    soma = soma + numeros[i] 
    i ++
while  (i < numeros.length);
console.log(soma)
