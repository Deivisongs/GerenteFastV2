/* ------ Ajustando Tamanho de tela --------*/
function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);

/* --------- Abrir/fechar Modal Salvar --------- */
function abrirModalSalvar(){
    const modal = document.getElementById('modalSalvarInfo')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex'
        body.style.overflow = 'hidden'
    }else{
        modal.style.display = 'none'
        body.style.overflow = 'auto'
    }
}

/* ---------- Abrir/Fechar Modal Excluir ------------ */
function abrirModalExcluir(){
    const modal = document.getElementById('modalExcluir')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex'
        body.style.overflow = 'hidden'
    }else{
        modal.style.display = 'none'
        body.style.overflow = 'auto'
    }
}







