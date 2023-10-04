btnRemover.addEventListener('click', function(event){
    event.preventDefault();

    if(inputId.value != '' && inputId.value > 0) {
        if(confirm("Deseja excluir?")){
            fetch("http://localhost:8080/"+ inputId.value, {
                method:"DELETE"
            })
                .then(resposta => resposta.json())
                .then(produto => removerProduto(produto))
        }else{
            form.reset();
            hidden = true;
            btnHidden();
        }

    }else {
        alert("ID inválido!");
    } 
});

function removerProduto(produto){
    alert("produto removido com sucesso - " + produto.descricao);
    var ids = document.getElementsByClassName("col-id");
    
    for(var i = 0; i < ids.length; i++){
        if( inputId.value == ids[i].innerText){
            var linha = ids[i].closest("tr");
            linha.remove();
            form.reset();
            hidden = true;
            btnHidden();
        }
    }
}
