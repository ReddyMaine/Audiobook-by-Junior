const nomeCap = document.getElementById("capitulo");
const audioCap = document.getElementById("audio-capitulo");
const botaoPlayPause = document.getElementById("play-pause");
const botaoProximoCap = document.getElementById("proximo");
const botaoVoltar = document.getElementById("anterior");

const numeroCap = 10;
let taTocando = 0;
let capAtual = 1;



function tocarFaixa() {
    taTocando = 1;
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
    audioCap.play();


}
function pausarFaixa() {
    taTocando = 0;
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
    audioCap.pause();
}

function tocarOuPausar() {
    if (taTocando === 0) {
        taTocando = 1;
        tocarFaixa();
    } else { 
        taTocando = 0;
        pausarFaixa();
    }
}

function proxCap() {
    if (capAtual === numeroCap) {
        capAtual = numeroCap;
    } 
    else {
        capAtual = capAtual + 1;
    }
    
    audioCap.src = "./books/dom-casmurro/" + capAtual + ".mp3";
    nomeCap.innerText = "Capítulo " + capAtual;
    tocarFaixa();
    taTocando = 1;
}
function capAnterior() {
    if (capAtual === 1) {
      capAtual = numeroCap;
    } else {
      capAtual -= 1;
    }
    audioCap.src = "./books/dom-casmurro/" + capAtual + ".mp3";
    nomeCap.innerText = "Capítulo " + capAtual;
    tocarFaixa();
    taTocando = 1;
  }
botaoPlayPause.addEventListener("click", tocarOuPausar);
botaoVoltar.addEventListener("click", capAnterior);
botaoProximoCap.addEventListener("click", proxCap);
audioCap.addEventListener("ended", proxCap);


