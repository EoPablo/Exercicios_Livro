const inProduto = document.getElementById('inProduto');
const inPreco = document.getElementById('inPreco');
const btCalcularPreco = document.getElementById('btCalcularPreco');
const outPromocao = document.getElementById('outPromocao');
const outPrecoProduto3 = document.getElementById('outPrecoProduto3');

function verPromocao () {
    let produto = inProduto.value;
    let preco = Number(inPreco.value);

    let precoPromocao = ((preco * 2) + (preco * 0.5)).toFixed(2);
    let precoProduto3 = (preco * 0.5).toFixed(2);

    outPromocao.textContent = `${produto} - Promoção: Leve 3 por apenas: ${precoPromocao}`;
    outPrecoProduto3.textContent = `O 3º produto sai por: R$ ${precoProduto3}`;

}

btCalcularPreco.addEventListener('click', verPromocao);