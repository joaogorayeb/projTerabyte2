btnAlterar.addEventListener('click', function(){
    alterar();
});
function alterar(){
    if(!alerta()){
        const dadosDoFormulario = new FormData(form);
            fetch(url, {
                method: "PUT",
                body: dadosDoFormulario
            })  
                .then(resposta => resposta.json())
                .then(dados => alterarProduto(dados))
                .catch(erro => console.log("Ocorreu um erro" + erro));
    }
};
function alterarProduto(produto){
    var ids = document.querySelectorAll(".col-id");

    for (var i = 0; i < ids.length; i++){
        if(inputId.value == ids[i].innerText){
            var linha = ids[i].closest("tr");
            linha.querySelector(".col-descricao").innerText = produto.descricao;
            linha.querySelector(".col-preco").innerText = produto.preco;
            linha.querySelector("img").src = "data:img/jpg;base64," + produto.img;

            if(produto.tipo == 1){
                linha.querySelector(".col-tipo").innerText = "Mais Vendidos";
            }else{
                linha.querySelector(".col-tipo").innerText = "Lançamentos";
            }

        }
    }
    form.reset();
    hidden = true;
    btnHidden();
}   