import './index.scss';
import { useState } from 'react';

export default function Jokenpo(){

    
var jogadorEscolha = 0;
var computadorEscolha = 0;
var ganhador = -1

function jogar(escolha){
jogadorEscolha = escolha;

 computadorEscolha = Math.floor((Math.random() * (3 -1 + 1)) + 1);
 
 // 1 - Pedra
 // 2 - Papel
 // 3 - Tesoura
 if((jogadorEscolha == 1) && (computadorEscolha == 1)){
    ganhador = 0
}

else if((jogadorEscolha == 1) && (computadorEscolha == 2)){
    ganhador = 2
}

else if((jogadorEscolha == 1) && (computadorEscolha == 3)){
    ganhador = 1
}


else if((jogadorEscolha == 3) && (computadorEscolha == 1)){
    ganhador = 2
}

else if((jogadorEscolha == 3) && (computadorEscolha == 2)){
    ganhador = 1
}

else if((jogadorEscolha == 3) && (computadorEscolha == 3)){
    ganhador = 0
}

//document.getElementById("jogador-escolha-" + jogadorEscolha).classList
//.add('selecionado');
//document.getElementById("computador-escolha-" + computadorEscolha).classList
//.add('selecionado');

if(ganhador == 0){
   // document.getElementById('mensagens').innerHTML = 'Empate';
}

else if(ganhador == 1){
   // document.getElementById('mensagens').innerHTML = 'Jogador ganhou';
}

else if(ganhador == 2){
   // document.getElementById('mensagens').innerHTML = 'Computador ganhou';
}
}

    return (

        <main className='main'>
            <div id='principal'>
                <h1 id='titulo'> Pedra, Papel, Tesoura</h1>
                <div id='placar'>
                    <div id='jogador'>
                        <h2 id='jogador-nome'>Jaque a Japa</h2>

                        <span id='jogador-pontos'>0</span>

                        <ul id='jogador-escolha'>
                            <li><a id='jogador-escolha-1' onClick= {jogar(1)}><img src='/pedra.png' alt='jaque'/></a></li>
                            <li><a id='jogador-escolha-2'  onClick={jogar(2)}><img src='/pape.png' alt='jaque'/></a></li>
                            <li><a id='jogador-escolha-3'  onClick={jogar(3)}><img src='/tesour.png' alt='jaque'/></a></li>
                        </ul>
                    </div>

                    <div id='versus'>vs</div>

                    <div id='computador'>
                        <h2 id='computador-nome'>Computador</h2>

                        <span id='computador-pontos'>0</span>

                        <ul id='computador-escolha'>
                            <li><a id='computador-escolha-1'><img src='/pedra.png' alt='jaque'/></a></li>
                            <li><a id='computador-escolha-2'><img src='/pape.png' alt='jaque'/></a></li>
                            <li><a id='computador-escolha-3'><img src='/tesour.png' alt='jaque'/></a></li>
                        </ul>
                    </div>
                </div>
                <div id='mensagens'>mensagens</div>
            </div>
        </main>
    )
}