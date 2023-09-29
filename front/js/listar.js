fetch(url, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET'
})
    .then(resposta => resposta.json())
    .then(listaDeProdutos => listarProdutos(listaDeProdutos))
    .catch(erro => console.log("ocorreu um erro!" + erro));


function listarProdutos(produtos) {
    produtos.forEach(produto => {
        inserirProduto(produto);
    });
}

function inserirProduto(produto) {
    var novaLinha = document.createElement("tr");
    var colId = document.createElement("td");
    var colDescricao = document.createElement("td");
    var colPreco = document.createElement("td");
    var colTipo = document.createElement("td");
    var colSelecionar = document.createElement("td");

    colId.classList.add('col-id');
    colId.innerText = produto.id;

    var colImg = document.createElement("td");
    var img = document.createElement("img");
    img.src = "data:img/jpg;base64," + produto.img;
    colImg.classList.add('col-img');
    colImg.appendChild(img);


    colDescricao.classList.add('col-descricao');
    colDescricao.innerText = produto.descricao;

    colPreco.classList.add('col-preco');
    colPreco.innerText = produto.preco;

    colTipo.classList.add("col-tipo");
    if (produto.tipo === 1) {
        colTipo.innerText = 'Mais Vendidos';
    } else if (produto.tipo === 2) {
        colTipo.innerText = 'Lançamentos';
    }

        var btn = document.createElement("button");
        btn.classList.add("btn", "btn-success");
        btn.innerText = "Selecionar";
        colSelecionar.appendChild(btn);

        novaLinha.appendChild(colId);
        novaLinha.appendChild(colImg);
        novaLinha.appendChild(colDescricao);
        novaLinha.appendChild(colPreco);
        novaLinha.appendChild(colTipo);
        novaLinha.appendChild(colSelecionar);

        document.querySelector("tbody").appendChild(novaLinha);
        selecionar(btn);
}