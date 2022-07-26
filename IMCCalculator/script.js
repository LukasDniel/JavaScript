const calc = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && peso !== '' && altura !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        }else if(valorIMC < 25){
            classificacao = 'com peso ideal';
        }else if(valorIMC < 30){
            classificacao = 'levemente acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'obesidade grau I';
        }else if(valorIMC < 40){
            classificacao = 'obesidade grau II';
        }else{
            classificacao = 'obesidade grau III CUIDADO'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC}. E você está ${classificacao}`;
    }else{
        resultado.textContent = 'Preencha os campos!';
    }
}

calc.addEventListener('click', imc);

