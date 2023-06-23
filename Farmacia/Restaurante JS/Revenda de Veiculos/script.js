const inMedicamento = document.getElementById('inMedicamento');
const inPreco = document.getElementById('inPreco');
const btPromocao = document.getElementById('btPromocao');
const outMedicamento = document.getElementById('outMedicamento');
const outPromocao = document.getElementById('outPromocao');

function calcularPromocao () {
    let medicamento = inMedicamento.value;
    let preco = Number(Math.floor(inPreco.value) * 2);

    outMedicamento.textContent = `Promoção de ${medicamento}`;
    outPromocao.textContent = `Leve 2 por R$ ${preco.toFixed(2)}`;
}

btPromocao.addEventListener('click', calcularPromocao);

