/* ------ Ajustando Tamanho de tela --------*/
function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);





/* ------- Abrir informações de Lancamentos ------ */
function abrirInfoLancamentos(num){
    const lancamento = document.getElementById(`lancamento${num}`)
    const btnExcluir = document.getElementById(`btnExcluir${num}`)
    const maisInfo = document.getElementById(`maisInfo${num}`)
    
    if(lancamento.style.display !== 'block'){
        lancamento.style.display = 'block'
        btnExcluir.style.display = 'flex'
        maisInfo.style.padding = '15px 20px'
        maisInfo.style.opacity = '1'

    }else{
        lancamento.style.display = 'none'
        btnExcluir.style.display = 'none'
        maisInfo.style.padding = '0'
        maisInfo.style.opacity = '0'

    }
}






/* ------ Abrir e Fechar Modal Relatorio -------- */
function abrirRelatorio(){
    const modal = document.getElementById('modalRelatorio')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
    }else{
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
    
}




/* ---------- Abir e Fechar Modal Notificações ------------*/

function abrirNotificacoes(){
    const modal = document.getElementById('modalNotificacoes')
    const notificacoes = document.getElementById('notificacoes')
    const body = document.getElementById('body')


    if(notificacoes.style.display != 'block'){
        notificacoes.style.display = 'block'
        body.style.overflow = 'hidden'
        modal.style.width = '100vw'
    }else{
        notificacoes.style.display = 'none'
        body.style.overflow = 'auto'
        modal.style.width = 'fit-content'
    }



}

/* ------ Abrir e Fechar Modal Excluir -------- */
function abrirModalExcluir(){
    const modal = document.getElementById('modalExcluir')
    const body = document.getElementById('body')

    if(modal.style.display != 'flex'){
        modal.style.display = 'flex';
        body.style.overflow = 'hidden';
    }else{
        modal.style.display = 'none';
        body.style.overflow = 'auto';
    }
    
}








