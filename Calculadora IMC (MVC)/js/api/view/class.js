import { PersonController } from "../controller/PersonContoller.js";

let personContoller = new PersonController()

// CONTROLAR ENVIO DE FORMULARIOE EXIBIND TABELA

let formulario = document.querySelector('form');

// escutador de evento do formulario

formulario.addEventListener('submit', (e) => {


    //adiciona pessoa

    personContoller.adiciona(e)

    // limpar formulario

    personContoller._limpaForm()
})