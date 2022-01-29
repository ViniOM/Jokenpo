const prompt = require('prompt-sync')();
console.clear();


var nome = prompt("Qual seu nome? ").toUpperCase();

var jokenpo = ["pedra", "papel", "tesoura"];
var aleat = Math.floor(Math.random()*jokenpo.length);
var computador = jokenpo[aleat];

var jogadorVitorias = 0;
var computadorVitorias = 0;
var turnos = 0;
var reiniciar = "sim";
var rodadas;

while (reiniciar == "sim") {
jogadorVitorias = 0;
computadorVitorias = 0;
turnos = 0;
i = 0;
rodadas = +prompt("Quantas rodadas quer jogar? ");
    while(isNaN(rodadas)) {
        console.log("       DIGITE UM NUMERO! ");
        rodadas = +prompt("Quantas rodadas quer jogar? ");
    }
console.clear();

    for (let i = 0; i < rodadas; i++ ){

    aleat = Math.floor(Math.random()*jokenpo.length);
    computador = jokenpo[aleat];
        
    turnos++;
    var jogador = prompt("Pedra, Papel, Tesoura? ").toLowerCase();
    console.clear();

        while (jogador != "pedra" && jogador != "papel" && jogador != "tesoura"){
            console.log("-------------------------------");
            jogador = prompt("pedra, papel ou tesoura?  ").toLowerCase();
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
    reiniciar = prompt("Deseja reiniciar? (sim | nao) ").toLowerCase();
    console.clear();
}
    
    console.log("OBRIGADO POR JOGAR!");
    console.log();
