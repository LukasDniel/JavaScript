// selecionar todos os elementos necessários do DOM - Inputs RANGE
let celsius = document.querySelector('#celsius');
let fahrenheit = document.querySelector('#fahrenheit');
let kelvin = document.querySelector('#kelvin');

// selecionar todos os elementos necessários do DOM - Inputs NUMBER
let numeroC = document.querySelector('#numeroC');
let numeroF = document.querySelector('#numeroF');
let numeroK = document.querySelector('#numeroK');

numeroC.value = celsius.value;
numeroF.value = fahrenheit.value;
numeroK.value = kelvin.value;

function atualizaC(){
    numeroC.value = celsius.value;
}


// formula de conversão Fahrenheit
function atualizaF(){
    let celsius_fahrenheit = parseFloat(celsius.value * 9/5) + 32;
    numeroF.value = celsius_fahrenheit.toFixed(2);
}

// formula de conversão Kelvin
function atualizaK(){
    let celsius_kelvin = parseFloat(celsius.value) + 273.00; // obrigatório parseFloat
    numeroK.value = parseFloat(celsius_kelvin).toFixed(2);
}

// zerar

function zerar(){
    celsius.value = 0.0;
    numeroC.value = celsius.value;
    numeroF.value = fahrenheit.value;
    numeroK.value = kelvin.value;
}
