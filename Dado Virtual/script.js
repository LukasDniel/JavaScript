//seleciona todos os elementos necessários da DOM

let numeroSorteado = document.querySelector('#dado');
let imgDado = document.querySelector('#imgDado');
let btnSortear = document.querySelector('#btnSortear');
let sorteado = document.querySelector('#sorteado');
let dadoRolando = document.querySelector('#dadoRolando');

 // evento de click para o botão
btnSortear.addEventListener('click', () => {

    //adiciona as animações no dado
    imgDado.classList.add('animar');
    sorteado.classList.add('aparecer');

    //executa o som
    dadoRolando.play()

    // esconde o botão de sortear, enquanto estiver sorteando (rodando)
    btnSortear.style.display = 'none';

    // tempo limite para executar a animação do dado
    setTimeout(() => {

        /* variavel numeroSorteado vai receber a função que pega
            um numero aleatorio, indicando como parametros
            o numero minimo e o máximo ( de imagens/ lados do dado )
        */
        numeroSorteado = getRandomInt(1,6);

        console.log(numeroSorteado);

        // faz a alteração da imagem, usando a variaval numroSortado
        imgDado.setAttribute('src', './images/'+numeroSorteado+'.png');
        //recebe o numero do dado sorteado de 1 a 6
        sorteado.textContent = numeroSorteado;

        // exibe o botão de sortar novamente
        btnSortear.style.display = 'inline-block';

        //remove as animações para voltar inicial
        imgDado.classList.remove('animar');
        sorteado.classList.remove('aparecer');
    }, 1500);
});

//função que faz os numeros aleatorios
function getRandomInt(min, max){
    min = Math.ceil(min) // arredonda pata cima  ceil = teto
    max = Math.floor(max) // arredonda para baixo floor = piso

    //operação que cria os numeros aleatórios
    return Math.floor(Math.random() * (max - min + 1)) + min;
}