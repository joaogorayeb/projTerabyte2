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
function inserirProduto(produto){
    var divProduto = document.createElement("div");
    divProduto.classList.add("div-produto");


    var img = document.createElement("img");
    img.src = "data:img/jpg;base64," + produto.img;
    // img.alt = produto.img;
    divProduto.appendChild(img);
    
    var textoDescricao = document.createElement("produto");
    textoDescricao.classList.add("desc-produto");
    textoDescricao.innerText = produto.descricao;
    divProduto.appendChild(textoDescricao);

    var text1 = document.createElement("produto");
    text1.classList.add("produto-valor");
    text1.innerHTML = '<s>De: R$' + (produto.preco).toFixed(2) + 'por:</s>';
    divProduto.appendChild(text1);

    var text2 = document.createElement("produto");
    text2.classList.add("p-avista");
    text2.innerHTML = 'R$' + ((produto.preco * 0.5).toFixed(2)) + '<span class="span-a-vista"> à vista</span>' ;
    divProduto.appendChild(text2);

    var text6 = document.createElement("produto");
    text6.classList.add("p-parcelado");
    text6.innerHTML = '12x de R$' + (produto.preco / 12).toFixed(2) + 'sem juros';
    divProduto.appendChild(text6);

    return divProduto;
    
};
getDados();