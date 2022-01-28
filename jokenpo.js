const prompt = require('prompt-sync')();
console.clear();


var nome = prompt("Qual seu nome? ");
var rodadas;
var jokenpo = ["pedra", "papel", "tesoura"];

var aleat = Math.floor(Math.random()*jokenpo.length);
var computador = jokenpo[aleat];

var jogadorVitorias = 0;
var computadorVitorias = 0;
var turnos = 0;
var reiniciar = "sim";

while (reiniciar == "sim") {
jogadorVitorias = 0;
computadorVitorias = 0;
turnos = 0;
i = 0;
rodadas = +prompt("Quantas rodadas quer jogar? ");
console.clear();

    for (let i = 0; i < rodadas; i++ ){

    turnos++;
    var jogador = prompt("pedra, papel, tesoura? ");
    console.clear();

        while (jogador != "pedra" && jogador != "papel" && jogador != "tesoura"){
            console.log("-------------------------------");
            console.log("!--!     INVALIDO     !--!");
            console.log("-------------------------------");
            console.log();
            jogador = prompt("pedra, papel ou tesoura?  ");
            console.clear();
        }

            console.log();
            console.log(`                   RODADA ${turnos}`);
            console.log("-------------------------------------------------");
            console.log();

            console.log(`   ${nome}: ${jogador}   |   computador: ${computador}`);
            
           

            if (jogador == "pedra"){
                if (computador == "pedra") {
                    console.log(`            ${jogadorVitorias}   |  EMPATE!  |   ${computadorVitorias}  `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
                else if (computador == "papel") {
                    computadorVitorias = computadorVitorias+1
                    console.log(`       ${jogadorVitorias}  |  COMPUTADOR venceu!  |  ${computadorVitorias} `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
                else if (computador == "tesoura"){
                    jogadorVitorias = jogadorVitorias+1
                    console.log(`        ${jogadorVitorias}   |  ${nome} venceu  |   ${computadorVitorias}`);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
            }else if (jogador == "papel") {
                if (computador == "papel") {
                    console.log(`            ${jogadorVitorias}   |  EMPATE!  |   ${computadorVitorias}  `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }else if (computador == "tesoura"){
                    computadorVitorias = computadorVitorias+1
                    console.log(`       ${jogadorVitorias}  |  COMPUTADOR venceu!  |  ${computadorVitorias} `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
                else if (computador == "pedra"){
                    jogadorVitorias = jogadorVitorias+1
                    console.log(`        ${jogadorVitorias}   |  ${nome} venceu  |   ${computadorVitorias}`);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
            }else if (jogador == "tesoura") {
                if (computador == "tesoura") {
                    console.log(`            ${jogadorVitorias}   |  EMPATE!  |   ${computadorVitorias}  `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
                else if (computador == "pedra") {
                    computadorVitorias = computadorVitorias+1
                    console.log(`       ${jogadorVitorias}  |  COMPUTADOR venceu!  |  ${computadorVitorias} `);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
                else if (computador == "papel") {
                    jogadorVitorias = jogadorVitorias+1
                    console.log(`        ${jogadorVitorias}   |  ${nome} venceu  |   ${computadorVitorias}`);
                    console.log();
                    console.log("-------------------------------------------------");
                    console.log();
                }
            } 
        }

    if (jogadorVitorias > computadorVitorias) {
        console.log(`       ------ ${nome} VENCEU! ------`);
       
    }
    else if (jogadorVitorias < computadorVitorias) {
        console.log("       ------ computador VENCEU! ------");
        
    }
    else{
        console.log("           ------ EMPATE ------");
        
    }
    console.log();
    reiniciar = prompt("Deseja reiniciar? ");
    }
    console.clear();
    console.log("OBRIGADO POR JOGAR!")
    console.log();
    




