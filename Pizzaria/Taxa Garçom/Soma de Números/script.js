function taxa () {
    var conta = document.querySelector('#num1').value;
    var clientes = document.querySelector('#num2').value;
    var total = conta / clientes
    alert(`Valor por cliente: R$ ${total.toFixed(2)} Reais.`)

}