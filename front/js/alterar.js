btnAlterar.addEventListener('click', function(e){
    e.preventDefault();
    if (!alerta()){
        const dadosDoFormulario = new FormData(this);
    
        fetch(url,{
            method: "PUT",
            body: JSON.stringify({
                "id":"inputId.value",
                "img":"inputImg.value",
                "descricao":"inputDescricao.value",
                "preco":"inputPreco.value",
                "tipo":"inputTipo.value"
            })
        })
        .then(resposta => resposta.json())
        .then(produto => alterarProduto(produto))
        .catch(erro => console.log("Ocorreu um erro!" + erro));
    }
    form.reset();
});