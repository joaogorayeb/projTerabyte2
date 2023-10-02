btnRemover.addEventListener('click', function(event){
    event.preventDefault();

    if(inputId.value != '' && inputId.value > 0) {
        fetch("http://localhost:8080/"+ inputId.value, {
            method:"DELETE",
        });
            // .then(resposta => resposta.json())
            // .then(produto => 
            removerProduto();
    }else {
        alert("ID inválido!");
    } 
});

function removerProduto(){
    // alert("produto removido com sucesso - " + produto.descricao);
    var ids = document.getElementsByClassName("col-id");
    for(var i = 0; i < ids.length; i++){
        if(ids[i].innerText == inputId.value){
            var tr = ids[i].closest("tr");
            tr.remove();
        }
    }
}
