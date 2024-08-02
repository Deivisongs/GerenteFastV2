function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);


// Mensagem de erro
function msgErro(){
    const msg = document.getElementById('msgErro')
    const msgP = document.getElementById('msgP')

    if(msgP.textContent){
        msg.style.padding = '6px 15px'
        msg.style.border = '1px solid rgb(255, 142, 142)'
        msgP.style.display = 'inline'
    }
}
