// 1. Criar os balões
// 2. Estourar os balões
// 3. Carregar jogo automatico

// Função que cria os balões na tela

// Variavel de pontuação

var total = 0;

function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);    
    var y = Math.floor(Math.random() * 400);   
    
    balao.setAttribute("style", "left:"+x+"px; top:"+y+"px;");
    //<div class="balao" style="left: 30px; top: 40px;"></div>
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);

}

// Função de estourar os balões

function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById('total')
    score.innerHTML = "Balões estourados: " + total;
}

// Função para carregar o jogo

function carregarJogo(){
    setInterval(criarBalao, 1000);
}