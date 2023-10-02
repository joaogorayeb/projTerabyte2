btnCancelar.addEventListener('click', function(){
    form.reset();
    hidden = true;
    btnHidden();
});
let form = document.querySelector("form"); 
    form.reset();

function btnHidden(){
    if(hidden){
        btnCadastrar.classList.toggle('visually-hidden');
        btnAlterar.classList.toggle('visually-hidden');
        btnRemover.classList.toggle('visually-hidden');
        btnCancelar.classList.toggle('visually-hidden');
    }
}
function alerta(){
    if(inputImg.files.length === 0 || inputDescricao.value.trim() === '' || inputPreco.value.trim() === '' ){
        alert("Todos os campos devem ser preenchidos!");
        return true;
    }
}