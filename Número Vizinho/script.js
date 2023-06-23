function soma() {
    var num = Number(document.querySelector('#num1').value);
    var ant = num - 1
    var suc = num + 1
    alert(`Número: ${num} Antecessor ${ant} e o Sucessor é ${suc}`)
}