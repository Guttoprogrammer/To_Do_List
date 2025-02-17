document.getElementById('btnclick').addEventListener('click', function(e){
    e.preventDefault();
    const inputForm = document.getElementById('formInput');
    if ((inputForm.value) === ''){
        const mensagemErro = document.getElementById('erro')
        mensagemErro.textContent = 'Por favor, digite sua tarefa.'
        mensagemErro.style.display = 'block'
    }else{
        const mensagemErro = document.getElementById('erro')
        mensagemErro.style.display = 'none'
        adicionaLi();
        inputForm.value = '';
    }
    
})

document.getElementById('lista-tarefa').addEventListener('click', function(e){
    if(e.target.tagName  === "LI"){
        e.target.classList.toggle('riscado');
    }
})

function adicionaLi(){
    const inputForm = document.getElementById('formInput');
    const lista = document.createElement('li');
    lista.textContent = inputForm.value;

    const ul = document.getElementById('lista-tarefa')
    ul.appendChild(lista)
}

