const inPrecoMin = document.getElementById('inPrecoMin');
const inTempo = document.getElementById('inTempo');
const btCalcularPreco = document.getElementById('btCalcularPreco');
const outResposta = document.getElementById('outResposta');

function calcularPreco () {
    let precoMin = Number(inPrecoMin.value);
    let tempo = Number(inTempo.value);
    let tempoTotal = Math.ceil(tempo / 15);

    let precoTotal = (precoMin * tempoTotal).toFixed(2);

    outResposta.textContent = `Valor a pagar R$: ${precoTotal}`;   
    
}

btCalcularPreco.addEventListener('click', calcularPreco)