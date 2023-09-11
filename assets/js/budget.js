const inputsRadio = document.querySelectorAll('input[type="radio"]')

const rangeInput = document.getElementById('prazo')
const rangeOutput = document.getElementById('out-prazo')
rangeOutput.textContent = rangeInput.value + ' mes'

const inputsCheckbox = document.querySelectorAll('input[type="checkbox"]')
const total = document.getElementById('budge-total')

let count = 0,
    radioValue = 0,
    rangeValue = 1,
    checkValue = 0

inputsRadio.forEach(input => {
    verificaRadio(input)
    input.addEventListener('input', () => {
        verificaRadio(input)
        atualizaTotal()
    })
})

rangeInput.addEventListener('input', (e) => {
    verificaRange(rangeInput)
    atualizaTotal()
    rangeOutput.textContent = e.target.value
    adicionaTextoRange(rangeOutput)
})

inputsCheckbox.forEach(input => {
    input.addEventListener('input', () => {
        verificaCheckbox(input)
        atualizaTotal()
    })
})

function verificaRadio(input){
    if (input.checked) {
        if(input.id == 'homepage'){
            radioValue = 500
        } else if (input.id == 'spa') {
            radioValue = 700
        }
        else if (input.id == 'dashboard') {
            radioValue = 1000
        }  else if (input.id == 'ecommerce') {
            radioValue = 1500
        }
    }
}

function verificaRange(input){
    rangeValue = 1 - ((input.value-1) * 5)/100
}

function adicionaTextoRange(input){
    if (input.value == 1) {
        input.innerHTML += ' mes'
    } else if (input.value == 5) {
        input.innerHTML += ' meses ou mais'
    } else {
        input.innerHTML += ' meses'
    }
}

function verificaCheckbox(input){
    if (input.checked) {
        checkValue += 400
    } else {
        checkValue -= 400
    }
}

function atualizaTotal(){
    count = (radioValue + checkValue) * rangeValue
    total.innerHTML = count.toFixed(2)
}

window.onload = atualizaTotal()