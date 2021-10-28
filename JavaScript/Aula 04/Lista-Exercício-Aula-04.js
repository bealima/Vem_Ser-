// 1) Crie uma função que receba uma string e retorna a quantidade de vogais e a quantidade de consoantes na string 
//    da seguinte forma: 'A string [stringInformada] tem X vogas e X consoantes';
var minhaString = ("Antes tarde do que nunca")
function consoanteVogal(minhaString){
  let strSplit= minhaString.toLowerCase().split("")
  let vogal = 0
  let consoante = 0
  for (let i= 0 ; i < minhaString.length; i++){
    if ((strSplit[i]) !== (strSplit[i].toUpperCase())){
      if ((strSplit[i] === "a") || (strSplit[i] === "e") || (strSplit[i] === "i") ||
        (strSplit[i] === "o") || (strSplit[i] === "u"))  {
        vogal = vogal + 1
      } else {
         consoante = consoante + 1
      }
    }  
  }
    console.log( `A string "${minhaString}"" tem ${vogal} vogais e ${consoante} consoantes !`)
}
consoanteVogal(minhaString)