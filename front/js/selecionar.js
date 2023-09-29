function selecionar(btn){
    btn.addEventListener('click', function(){
        var linha = this.closest("tr");
        inputId.value = linha.querySelector(".col-id").innerText;
        inputImg.value = linha.querySelector(".col-img").innerText;
        inputDescricao.value = linha.querySelector(".col-descricao").innerText;
        inputPreco.value = linha.querySelector(".col-preco").innerText;
        
        if(linha.querySelector(".col-tipo").innerText == 'Mais Vendidos'){
            document.getElementById("mais").checked = true;
            
        }else{
            document.getElementById("lan").checked = true;
        }
        // inputTipo.value = linha.querySelector(".col-tipo").innerText;
        btnHidden();
        hidden = false;
    })
}