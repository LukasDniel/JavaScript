class Produto{

    constructor(){
        this.id = 1,
        this.arrayProdutos = [];
        this.editId = null;
    }

    //CHAMA METODO VALIDA E SALVA
    salvar(){
        let produto = this.lerDados();

        if(this.valida(produto)){
            if(this.editId == null){
                this.adicionar(produto)
            }else{
                this.atualizar(this.editId, produto)
            }
        }

        this.listaTabelas();
        this.cancelar();
    }


    // ADICIONA PRODUTOS NO ARRAY OS PRODUTOS
    adicionar(produto){
        produto.preco = parseFloat(produto.preco);
        this.arrayProdutos.push(produto);
        this.id++;
    }

    // CHAMA METODO ADICIONAR E VALIDA OS DADOS INSERIDOS
    valida(produto){
        
        let mensagem = '';
        if(produto.nomeProduto == ''){
            mensagem += ' - Informe o Nome do Produto \n';
        }

        if(produto.valorProduto == ''){
            mensagem += ' - Informe o Preço do Produto';
        }

        if(mensagem != ''){
            alert(mensagem);
            return false;
        }

        return true
    }

    // LOGICA DA TABELA
    listaTabelas(){
        let tbody = document.querySelector('#tbody');

        // LIMPA O TBODY PARA NÃO DUPLICAR A LINHA
        tbody.innerText = '';

        //PARA CADA PRODUTO ADICIONADO ELE ADICIONA UMA LINHA
        for(let i = 0; i < this.arrayProdutos.length; i++){
            // CRIA UMA NOVA LINHA DE 
            let tr = tbody.insertRow();
            // CRIA UM NOVO PRODUTO DENTRO DA LINHA (NOVA COLUNA)
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_preco = tr.insertCell();
            let td_acao = tr.insertCell();

            //EXIBI NA TABELA
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;
            td_preco.innerText = 'R$ ' + this.arrayProdutos[i].valorProduto;

            td_id.classList.add('center');
            td_acao.classList.add('center');

            //ADICIONA IMAGEM AO BOTÃO DE EDITAR E DELETAR
            let imgEdit = document.createElement('img');
            imgEdit.src = './image/edit.png';
            imgEdit.setAttribute('onclick', `produto.prepararAtualizar(${JSON.stringify(this.arrayProdutos[i])})`);




            let imgDel = document.createElement('img');
            imgDel.src = './image/del.png';
            // CRIA UM EVENTO ON CLICK E CHAMA O METODO EXCLUIR RECEBENDO COMO PARAM O ID
            imgDel.setAttribute('onclick', `produto.excluir(${this.arrayProdutos[i].id})`)
            // ADICIONA A IMAGEM AO TD
            td_acao.appendChild(imgEdit);
            td_acao.appendChild(imgDel);

            console.log(this.arrayProdutos);

        }
    }

    // JOGA OS DADOS PARA OS INPUTS NOVAMENTE PARA ATUALIZA-LOS
    prepararAtualizar(dados){
        this.editId = dados.id;

        document.querySelector('#produto').value = dados.nomeProduto;
        document.querySelector('#valor').value = dados.valorProduto;
        document.querySelector('#btn1').innerText = 'Atualizar';
    }

    // ATUALIZA OS DADOS DO PRODUTO
    atualizar(id, produto){

        for(let i = 0; i < this.arrayProdutos.length; i++){
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos[i].nomeProduto = produto.nomeProduto;
                this.arrayProdutos[i].valorProduto = produto.valorProduto;
            }
        }   
    }

    // PEGA OS DADOS DOS INPUTS
    lerDados(){
       let produto = {}

       produto.id = this.id;
       produto.nomeProduto = document.querySelector('#produto').value;
       produto.valorProduto = document.querySelector('#valor').value;

       return produto;
    }

    // LIMPA OS CAMPOS
    cancelar(){
        document.querySelector('#produto').value = '';
        document.querySelector('#valor').value = 'R$ ';

        document.querySelector('#btn1').innerHTML = 'Adicionar';
        this.editId = null;
    }

    // EXCLUI DADOS DA TABELA E DO ARRAY
    excluir(id){
        // VALIDAÇÃO DE REALMENTE QUER DELETAR
        if(confirm('Deseja realmente deletar o ID' + id + ' ?')){
            let tbody = document.querySelector('#tbody');
            for(let i = 0; i < this.arrayProdutos.length; i++){
    
                if(this.arrayProdutos[i].id == id){
                    // DELETA 1 ITEM DO ARRAY COM O ID ESPECIFICADO
                    this.arrayProdutos.splice(i, 1);
                    // DELETA DA TABELA
                    tbody.deleteRow(i);
                }
            
        }
    }

    }
}

let produto = new Produto();