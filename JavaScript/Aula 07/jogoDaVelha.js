// declaração pelo ID dos elementos da tabela
let quadrado1 = document.getElementById("l1c1");
let quadrado2 = document.getElementById("l1c2");
let quadrado3 = document.getElementById("l1c3");
let quadrado4 = document.getElementById("l2c1");
let quadrado5 = document.getElementById("l2c2");
let quadrado6 = document.getElementById("l2c3");
let quadrado7 = document.getElementById("l3c1");
let quadrado8 = document.getElementById("l3c2");
let quadrado9 = document.getElementById("l3c3");

// tornando os elementos da tabela clicáveis
var arrayQuadrados = [quadrado1, quadrado2, quadrado3, quadrado4, quadrado5, quadrado6, quadrado7, quadrado8, quadrado9];

arrayQuadrados.forEach(e=>{
    e.addEventListener('click', recebeXO);
});

// declaração do restante dos elementos 
let round = 0;

let titulo = document.getElementById("titulo");

let tableVelha = document.getElementById("tableVelha");

let jogadorDaVez = document.getElementById("jogadorDaVez");
jogadorDaVez.innerText = "JOGADOR 1";

let placarJogador1= document.getElementById("placarJogador1");
placarJogador1.innerText = "0"

let placarJogador2= document.getElementById("placarJogador2");
placarJogador2.innerText = "0";

// settando a variável round para dividir o jogo por turnos (X ou O), checar se há vencedores ou  e velha.

function recebeXO($event){

    if ($event.target.innerText === ""){
        
        if ( round % 2 === 0){
            jogadorDaVez.innerText = "JOGADOR 2";
            $event.target.innerText = "X";
            verificaJogada();
            round++;

        } else if (round % 2 === 1){
            jogadorDaVez.innerText = "JOGADOR 1";
            $event.target.innerText = "O";
            verificaJogada();
            round++;
        };
        
        if ((round === 9) && (titulo.innerText === "Jogo da Velha")) {
            titulo.innerText= "Deu Velha!!"
            fimDeJogo()
            return
        };

    };
    
};

// botão recomeçar 

let botaoRecomecar = document.getElementById("btnRecomecar");
botaoRecomecar.addEventListener('click', recomecar);

function recomecar (){
    round = 0;

    titulo.innerText = "Jogo da Velha";

    arrayQuadrados.forEach(e=>{
        e.innerText = "";
    });  
}

// função para verificar se há vencedores chamada a cada rodada

function verificaJogada(){

    arrayQuadrados.forEach((e, index) => {

        if (e.innerText === "") return;

        if (index % 3 === 0 ) {

            e.innerText === arrayQuadrados[index +1].innerText && e.innerText === arrayQuadrados[index +2].innerText ?
                vencedor() : vidaQueSegue();        
        }; 

        if (index < 3) {

            e.innerText === arrayQuadrados[index + 3].innerText && e.innerText === arrayQuadrados[index + 6].innerText ?
                vencedor() : vidaQueSegue();
        }; 
        if (index === 0) {

          e.innerText === arrayQuadrados[4].innerText && e.innerText === arrayQuadrados[8].innerText ? 
            vencedor () : vidaQueSegue();
        }; 
        
        if (index === 2) {

            e.innerText === arrayQuadrados[4].innerText && e.innerText === arrayQuadrados[6].innerText ? 
              vencedor() : vidaQueSegue();
        };

    });
};

// ações para quando há vencedor  

function vencedor(){
    round % 2 === 0 ? titulo.innerText = "Vitória do Jogador 1 !!" : titulo.innerText = "Vitória do Jogador 2 !!"; 
    fimDeJogo();
};

// fim de jogo e placar  

function fimDeJogo(){

    if (titulo.innerText === "Vitória do Jogador 1 !!"){
        placarJogador1.innerText = parseInt(placarJogador1.innerText) +1;  

    } else if (titulo.innerText === "Vitória do Jogador 2 !!"){
        placarJogador2.innerText = parseInt(placarJogador2.innerText) +1;  
    };

    arrayQuadrados.forEach(e => {
        
        if (e.innerText === ""){
            e.innerText = "--";
        };
    });  
    jogadorDaVez.innerText = "---";
}

// função fantasma pra settar o ternário ...
function vidaQueSegue(){};

