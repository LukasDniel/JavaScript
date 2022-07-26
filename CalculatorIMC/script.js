// Pegar o elemento que calcula o IMC
let calcular = document.getElementById('calcular');


// Função que pega os valores do input validação para o calculo
function imc(){
    //acessar os valores dos inputs
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

    //condição para calcular e exibir os resultados
    if(nome !== ''  && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura* altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso!';
        }else if(valorIMC < 25){
            classificacao = 'no peso ideal';
        }else if(valorIMC < 30){
            classificacao = 'acima do peso';
        }else if(valorIMC < 35){
            classificacao = 'com obesidade grau I';
        }else if(valorIMC < 40){
            classificacao = 'com obsedidade grau II';
        }else{
            classificacao = 'com obesidade grau III CUIDADO!!'
        }

        resultado.textContent = `${nome}, seu IMC é: ${valorIMC} e você está ${classificacao}`;

    }else{
        // Validação caso os campos estejam vazios
       resultado.textContent = " Preencha todos os campos ";
    }
}

// função de click no calculo
calcular.addEventListener('click', imc);