function taxa () {
    var valor1 = Number(document.querySelector('#num1').value);
    var valor2 = Number(document.querySelector('#num2').value);
    var totalValor = valor1 + valor2
    alert(`Total a Pagar: R$ ${totalValor.toFixed(2)} Reais`)
}