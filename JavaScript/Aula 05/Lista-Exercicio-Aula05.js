

//===================================================================================================================================================

// **** PROFESSOR : cada ação está fazendo o que tem que fazer (assim eu espero kk), mas eu naõ sei como incrementar a lista já existente, quando recomeça o IF, as configurações 
//      zeram. Não consegui construir um raciocínio pra resolver isso :( , se vc puder me dar uma luz seria top :) ****    


var listaDeProdutos =[{id: "0", descricao: "legal", valor: 2}, {id: "1", descricao: "massa", valor: 5}]
var cadastrarProduto = (produto)=>{ listaDeProdutos.push(produto)};
// Tela inicial, escolha de ação 
var acaoUsuario = prompt("Olá! digite o número da ação que você deseja realizar: \n 1- Cadastrar um novo produto\n 2- Excluir um produto\n 3- Localizar um produto\n 4- Visualizar a lista de produtos cadastrados")
if ((acaoUsuario !== "1") && (acaoUsuario !== "2") && (acaoUsuario !== "3") && (acaoUsuario !== "4")){
  alert("Opção inválida, tente outra vez.")
// Cadastrar novo produto
} else if (acaoUsuario === "1"){
    let idProduto = Math.floor(Math.random() * 100000);
    if (listaDeProdutos.some(produto => produto.id === idProduto )){
        idProduto = Math.floor(Math.random() * 100000);
    }else{
    let descricaoProduto = prompt("Descrição do produto: ")
    let precoProduto = parseFloat(prompt("Preço do produto: R$ "))
    cadastrarProduto({id:idProduto, descricao: descricaoProduto, valor: precoProduto.toFixed(2)});
    alert(`Novo produto cadastrado: \n ID: ${idProduto} \n Descrição: ${descricaoProduto} \n Valor: R$ ${precoProduto.toFixed(2)}`)
    }
// Excluir produto
} else if (acaoUsuario === "2"){
    let idProdutoExcluir = prompt("Digite o ID do produto que deseja excluir: ")
    if (listaDeProdutos.every(produto => produto.id !== idProdutoExcluir)){
        alert("ID inexistente.")
    }else {
        function excluirProduto(listaDeProdutos) {
          let listaFiltrada = listaDeProdutos.filter(aluno => aluno.id !== idProdutoExcluir )
          listaDeProdutos = listaFiltrada
        };
        excluirProduto(listaDeProdutos)
        alert(`Produto ID: ${idProdutoExcluir} excluído com sucesso.`)
    }
// Pesquisar produto
} else if(acaoUsuario === "3"){
    let idProdutoPesquisar = prompt("Digite o ID do produto que deseja pesquisar: ")
    if ( listaDeProdutos.find(produto => produto.id === idProdutoPesquisar)){
        console.log(listaDeProdutos.find(produto => produto.id === idProdutoPesquisar))
    }else {
        alert ("Produto não encontrado")
    }
// Imprimir lista de produtos 
} else if (acaoUsuario === "4"){
    let listaDeCadastrados = listaDeProdutos.forEach(produto => console.log(produto));
};