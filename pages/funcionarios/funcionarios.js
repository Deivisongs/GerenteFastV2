/* ------ Ajustando Tamanho de tela --------*/
function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);

/* ---------- Abrir modal Funcionario ---------- */
function abrirModalInfo(){
    const modal = document.getElementById('modalInfo')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex';
        body.style.overflow = 'hidden'
    }else{
        modal.style.display = 'none';
        body.style.overflow = 'auto'
    }
}


/* ---------- Abrir modal Ferias ---------- */
function abrirModalAdiciona(x, button, itens){
    const modal = document.getElementById(x)

    const btnAdd = document.getElementById(button)
    const itensAdd = document.getElementById(itens)

    console.log(btnAdd)
    console.log(itensAdd)
    console.log(x)

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex'
        btnAdd.style.display = 'none'
        itensAdd.style.display = 'flex'

    }else{
        modal.style.display = 'none'
        btnAdd.style.display = 'flex'
        itensAdd.style.display = 'none'
    }
}

