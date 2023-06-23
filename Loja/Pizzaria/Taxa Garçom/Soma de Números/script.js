function desconto () {
    const num = Number(document.querySelector('#num1').value);
    const avista = num - ( num * 0.10)
    const parcelado = num / 3
    alert(`À Vista R$: ${avista.toFixed(2)}\nOu 3x de R$: ${parcelado.toFixed(2)}`)
    
}