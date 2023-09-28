function selecionar(btn){
    btn.addEventListener('click', function(){
        var linha = this.closest("tr");
        inputId.value = linha.querrySelector(".col-id").innerText;
        inputImg.value = linha.querrySelector(".col-img").innerText;
        inputNome.value = linha.querrySelector(".col-nome").innerText;
        inputDescricao.value = linha.querrySelector(".col-descricao").innerText;
        inputPreco.value = linha.querrySelector(".col-preco").innerText;
    })
    btnHidden();
    hidden = false;
}