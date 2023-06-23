const inQuilo = document.getElementById('inQuilo');
const inConsumo = document.getElementById('inConsumo');
const btCalcular = document.getElementById('btCalcular');
const outValor = document.getElementById('outValor');

    function calcularPreco() {
        let quilo = Number(inQuilo.value);
        let consumo = Number(inConsumo.value);

        let valor = (quilo / 1000) * consumo;

        outValor.textContent = (`Valor a pagar R$: ${valor.toFixed(2)}`);
    }

    
    btCalcular.addEventListener('click', calcularPreco)