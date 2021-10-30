// function isPositive(number) {
//     return number >=0;
// }
var isPsitive = number => number >= 0

// function randomNumber() {
//     return Math.random;
// }

var randomNumer = () => Math.random()

// document.addEventListener('click', /*daqui p frente, substitua por arrow*/  function() {
//     console.log('Click');
// })

document.addEventListener('click' , () => console.log(click)

// function sum(a, b) {
//     return a + b;
// }

var soma = (a, b) => a + b;

/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 

    var listaAlunos = [{nome: "João", idade: 30}, {nome: "Maria", idade: 32}]    
    var addAluno = (aluno) => {listaAlunos.push(aluno); console.log(listaAlunos)};
    addAluno({nome: "Ana", idade: 27});
    
    listaAlunos.find ((aluno) => aluno.nome === "Ana");
    