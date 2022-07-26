// cria uma lista com as cores
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// pega o botão 
const btn = document.getElementById('btn');
// pega o span onde esta o valor da cor que vem da variavel colors
const color = document.querySelector(".color");

// cria uma ação para o botão
btn.addEventListener('click', function(){
    //pega um numero de 0 a 3 do indice da lista
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    //adiciona um style para o body, usando a lista de cores o numero da var randomNumber
    document.body.style.backgroundColor = colors[randomNumber];
    //adiciona no span o valor da cor referente ao indeice da lista
    color.textContent = colors[randomNumber];
});

// função que faz um numero aleatório
function getRandomNumber(){
    //retorna um numero aleátorio com base nos indices da lista colores
    return Math.floor(Math.random() * colors.length);
}