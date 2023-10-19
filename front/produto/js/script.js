document.addEventListener("DOMContentLoaded", function(){
    const stringURL = window.location.search;
    const paransURL = new URLSearchParams(stringURL);
    const id = paransURL.get("id");
});

function getProduto(id){
    fetch("http://localhost:8080/produto/" + id)
    .then(resposta => resposta.json())
    .then(produto => preencheTabela(produto))
    .catch(erro => console.log("Erro ao buscar produto: " + erro));
}

function preencheTabela(p){
    var img = new Image;
    img.src = "data:img/jpg;base64," + p.img;
    document.querySelector(".img-produto").appendChild(img);
    document.querySelector(".descricao").innerText = p.descricao
    document.querySelector(".valor1").innerText = p.valor 
    document.querySelector(".valor2").innerText = p.valor *0.60
    document.querySelector(".valor-parc").innerText = p.valor /12
}