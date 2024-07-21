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