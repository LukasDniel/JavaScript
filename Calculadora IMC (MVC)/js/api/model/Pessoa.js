export class Person{

    _nome
    _idade
    _peso
    _altura
    _imc
    _classificacao
    static totalPessoas = 0

    constructor(name, age, weight, height){
        this._nome = name
        this._idade = age
        this._peso = weight
        this._altura = height
        this._imc = (this._peso / (this._altura * this._altura)).toFixed(2)
        Person.totalPessoas += 1
        this._classificacao = this.classificaImc()
    }


    calculaImc(){
        return this.imc
    }

    classificaImc(){
        let valorImc = (this._imc)
        let classificacao = '';

        if(valorImc < 18.5){
            classificacao = 'Abaixo do peso'
        } else if(valorImc <= 24.9){
            classificacao = 'Peso ideal'
        } else if(valorImc <= 29.9){
            classificacao = 'Sobrepeso'
        }else if(valorImc <= 34.9){
            classificacao = 'Obesidade grau I'
        }else if(valorImc <= 39.9){
            classificacao = 'Obesidade grau II'
        }else if(valorImc <= 40){
            classificacao = 'Obesidade grau III'
        }else{
            classificacao = 'Valor invalido!'
        }

        return classificacao;
    }


    get nome(){
        return this._nome
    }

    get idade(){
        return this._idade
    }

    get peso(){
        return this._peso
    }

    get altura(){
        return this._altura
    }

    get imc(){
        return this._imc
    }

    get totalPessoas(){
        return Person.totalPessoas
    }


    set nome(novoNome){
        this._nome = novoNome
    }

    set idade(novaIdade){
        this._idade = novaIdade
    }

    set peso(novoPeso){
        this._peso = novoPeso
    }

    set altura(novaAltura){
        this._altura = novaAltura
    }

} // fim da classe