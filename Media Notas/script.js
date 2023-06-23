function notaMedia () {
    const nota1 = Number(document.querySelector('#num1').value);
    const nota2 = Number(document.querySelector('#num2').value);
    const media = (nota1 + nota2) / 2
    // alert(`A média do aluno foi de: ${media}`)
    document.querySelector('#resposta').textContent = (`A média foi de: ${media}`);
}

var mostrar = document.querySelector('mostrar');
mostrar.addEventListener('click', notaMedia)