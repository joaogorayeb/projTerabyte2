let url = "http://localhost:8080/";

function getDados(){
    fetch(url)
    .then(resposta => resposta.json())
    .then (produtos => listarProdutos(produtos))
    .catch (erro => console.log ("Ocorreu um erro! " + erro))
}

function listarProdutos(produtos){
    produtos.forEach(produto => {
        if(produto.tipo === 1){
            document.getElementById("mv").appendChild(inserirProduto(produto));
        }else if(produto.tipo === 2){
            document.getElementById("lancamentos").appendChild(inserirProduto(produto));
        }  
    });
}
function inserirProduto(p){
    var divProduto = document.createElement("div");
    divProduto.classList.add("div-produto");


    var img = document.createElement("img");
    img.classList.add("div-img-produto")
    img.src = "data:img/jpg;base64," + p.img;
    // img.alt = produto.img;
    divProduto.appendChild(img);
    
    var link = document.createElement("a");
    link.setAttribute("href", "produto/?id=" + p.id);
    link.setAttribute("target","_blank");
    link.appendChild(img);
    divProduto.appendChild(link);


    var textoDescricao = document.createElement("produto");
    textoDescricao.classList.add("desc-produto");
    textoDescricao.innerText = p.descricao;
    divProduto.appendChild(textoDescricao);


    var text1 = document.createElement("p");
    text1.classList.add("p-valor");
    text1.innerHTML = '<s>De: R$' + (p.preco).toFixed(2) + ' por:</s>';
    divProduto.appendChild(text1);

    var text2 = document.createElement("p");
    text2.classList.add("p-avista");
    text2.innerHTML = 'R$' + ((p.preco * 0.5).toFixed(2)) + '<span class="span-a-vista"> à vista</span>' ;
    divProduto.appendChild(text2);

    var text6 = document.createElement("p");
    text6.classList.add("p-parcelado");
    text6.innerHTML = '12x de R$' + (p.preco / 12).toFixed(2) + ' sem juros';
    divProduto.appendChild(text6);

    return divProduto;
    
};
getDados();