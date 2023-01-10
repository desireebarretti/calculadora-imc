let peso = document.getElementById('peso');
let altura = document.getElementById('altura');
let resultado = document.getElementById('resultado');

function calcularImc() {
    var imc = Math.round(peso.value / (altura.value * altura.value));
    resultado.value = imc; 
    altura.value = '';
    peso.value = '';
}
