import { Person } from '../model/Pessoa.js'
import { ListaPessoas } from '../model/ListaPessoas.js'
import { Mensagem } from '../model/Mensagem.js'
import { MensagemView } from '../view/MensagemView.js'
import { PessoasView } from '../view/PessoasView.js'


export class PersonController {

    //atributos e propriedades
    _inputNome
    _inputIdade
    _inputPeso
    _inputAltura

    //metodos

    //construtor

    constructor() {
        this._inputNome = document.querySelector('#nome')
        this._inputIdade = document.querySelector('#idade')
        this._inputPeso = document.querySelector('#peso')
        this._inputAltura = document.querySelector('#altura')


        // criar lista de pessoas
        this._listaPessoas = new ListaPessoas()

        //mensagem
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView(document.querySelector('#mensagem'))
        this._mensagemView.update(this._mensagem)


        this._pessoasView = new PessoasView(document.querySelector('#dados'))
        this._pessoasView.update(this._listaPessoas)
    }

    //adiciona pessoa
    adiciona(e) {
        e.preventDefault()


        this._listaPessoas.adiciona(this._criaPessoa())
        //console.log(this._listaPessoas.pessoas)

        //mensagem de sucesso
        this._mensagem.texto = 'Pessoa cadastrada com sucesso!'
        this._mensagemView.update(this._mensagem)
       

        // atualização da tela
        this._pessoasView.update(this._listaPessoas)
    }

    // cria pessoa
    _criaPessoa() {
        return new Person(
            this._inputNome.value,
            this._inputIdade.value,
            this._inputPeso.value,
            this._inputAltura.value
        )
    }

    //limpa formulário

    _limpaForm() {

        this._inputNome.value = ''
        this._inputIdade.value = ''
        this._inputPeso.value = ''
        this._inputAltura.value = ''

        this._inputNome.focus()
    }
}