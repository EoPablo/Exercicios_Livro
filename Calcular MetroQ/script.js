function areacalculo () {
    var largura = document.querySelector('#num1').value;
    var comprimento = document.querySelector('#num2').value;
    var total = largura * comprimento
    document.getElementById('resposta').textContent = `${total} m²`
    
}

var mostrar = document.getElementById('mostrar');
mostrar.addEventListener('click', areacalculo);