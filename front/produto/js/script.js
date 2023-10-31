document.addEventListener("DOMContentLoaded", function(){
    const stringURL = window.location.search;
    const paransURL = new URLSearchParams(stringURL);
    const id = paransURL.get("id");
    getProduto(id);
});

function getProduto(id){
    fetch("http://localhost:8080/produto/" + id)
    .then(resposta => resposta.json())
    .then(produto => preencheTabela(produto))
    // .catch(erro => console.log("Erro ao buscar produto: " + erro));
}

function preencheTabela(p){
    var img = new Image;
    img.src = "data:img/jpg;base64," + p.img;
    document.querySelector(".img-grande").appendChild(img);
    document.querySelector(".descricao").innerText = p.descricao;
    document.querySelector(".valor").innerText = formataValor(p.preco);
    document.querySelector(".valor2").innerText = formataValor(p.preco * 0.6);
    document.querySelector(".valor-parc").innerText = formataValor((p.preco) /12);
}
function formataValor(valor){
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "brl"
    });
}