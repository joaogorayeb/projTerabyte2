document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    const dadosDoFormulario = new FormData(this);

    fetch(url,{
        method: "POST",
        body: dadosDoFormulario
    })
    .then(resposta => resposta.json())
    .then(produto => inserirProduto(produto))
    .catch(erro => console.log("Ocorreu um erro!" + erro));
});