// Lista de exercícios Aula 01
// exercício 01:
var resposta = window.prompt("Você é feliz?")
if (resposta === "SIM") {
  alert("Parabéns!!")
} else if (resposta === "Não") {
    var segunda_resposta = prompt("vamos mudar isso ?")
    alert(segunda_resposta )
} else {
  confirm("Você tem noções dos seus atos?")
};

//exercício 02:
var nome_cliente = prompt("Digite o nome do cliente:")
var nome_atendente = prompt("Digite o nome do atendente:")
alert(`Olá ${nome_cliente}, eu me chamo ${nome_atendente}, em que posso ajudar?`)

//exercício 03:
var isFriday= confirm("Hoje é sexta-feira? SIM (Ok)  NÃO (Cancelar)")
var isTwoGreaterThanFour =  2 > 4
var isValueEmpty = prompt("Digite alguma coisa")
if ((isValueEmpty  === null) || (isValueEmpty === undefined) || (isValueEmpty.length === 0)){
  alert("Digite um valor válido"))
}

//exercício 04:
var numero_1 = prompt("Digite o primeiro número da operação")
var operacao = prompt("Digite a operação desejada : Adição (+), subtração (-), multiplicação (*) ou divisão (/)")
var numero_2 = prompt("Digite o segundo outro número da operação")
var resultado = 0

numero_1 = parseFloat(numero_1)
numero_2 = parseFloat(numero_2)

if ((typeof numero_1 !== 'number') || (numero_1.toString() === 'NaN')
  && 
  (typeof numero_2 !== 'number') || (numero_2.toString() === 'NaN')){
     alert("Opa, digite um valor válido.");
  }else {
    if (operacao === "+"){
      resultado = numero_1 + numero_2 
    } else if( operacao === "-" ){
      resultado = numero_1 - numero_2
    } else if (operacao === "*"){
      resultado = numero_1 * numero_2
    } else if (operacao === "/"){
      if (numero_2 === 0){
        alert ("Não é possível dividir por 0, tente outro número")
      }else {
        resultado = numero_1 / numero_2
      }
    }else if ((operacao !== "+") && (operacao !== "-") && (operacao !== "*") && (operacao!== "/") ){
      alert("Opa, digite uma operação válida." );
    }else {
      alert( `O resultado dessa operação é igua a ${resultado}`);
    }

// exercício 05:
var T1 = parseFloat(prompt("Nota do Trabalho 1 :"))
var T2 = parseFloat(prompt("Nota do Trabalho 2 :"))
var P1 = parseFloat(prompt("Nota da Prova :"))
var media = (T1 + T2 + P1)/3

if ((typeof T1 === 'number') && (T1.toString() !== 'NaN')
  && 
  (typeof T2 === 'number') && (T2.toString() !== 'NaN') 
  
  && 
  (typeof P1 === 'number') && (P1.toString() !== 'NaN')){
  
} else {
  alert("Opa, digite um valor válido.");
}
if (media < 5){
  alert ("Reprovado")
} else if ((media >= 5) && (media < 7)){
  alert("Recuperação")
} else if (media >= 7 ){
  alert("Parabéns, você foi aprovado(a)")
}