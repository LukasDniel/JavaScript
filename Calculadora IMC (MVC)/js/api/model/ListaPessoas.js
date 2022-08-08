export class ListaPessoas{

    constructor() {
        this._pessoas = []
    }

    adiciona(pessoa){
        this._pessoas.push(pessoa)
    }

    //programação defensiva retorna uma copia do array
    // usando concat, passando o nosso array como parametro
    get pessoas(){
        return [].concat(this._pessoas)
    }
}