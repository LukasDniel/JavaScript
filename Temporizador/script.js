    function acao(){
        document.write("Executando...<br/>");
    }


    // setInterval a cada 1 segundo executa uma acao

   var timer = setInterval(acao, 1000);

   //setTimeout espera 3 segundos e executa a função

   var intervalo = setTimeout(acao, 3000);