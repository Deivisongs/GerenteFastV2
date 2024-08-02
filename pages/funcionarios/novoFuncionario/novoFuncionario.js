/* ------ Ajustando Tamanho de tela --------*/
function ajusteTamanhoTela(){
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
ajusteTamanhoTela()
window.addEventListener('resize', ajusteTamanhoTela);



/* --------- Abrir/fechar Modal --------- */
function abrirModal(){

    const msg = document.getElementById('msgErro')
    const msgP = document.getElementById('msgP')
    msg.style.padding = '0px'
    msg.style.border = 'none'
    msgP.style.display = 'none'

    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const genero = document.getElementById('genero')
    const nascimento = document.getElementById('nascimento').value
    const funcao = document.getElementById('funcao')
    const admissao = document.getElementById('admissao').value
    const experiencia = document.getElementById('experiencia')

    if((nome && sobrenome && nascimento && admissao  !== "") && (funcao.value !== "0") && (genero.value !== "0")){
        
        const modal = document.getElementById('modalSalvarInfo')
        const body = document.getElementById('body')

        // troca imagem do icone
        const iconeTopo = document.getElementById('iconeTopo')
        if(genero.value === "M"){
            iconeTopo.src = "https://img.icons8.com/3d-fluency/94/manager--v2.png"
        }else{
            iconeTopo.src = "https://img.icons8.com/3d-fluency/94/businesswoman--v2.png"
        }

        // dados no modal
        document.getElementById('nomeModal').textContent = nome + " " + sobrenome
        document.getElementById('nascimentoModal').textContent = `Data de Nascimento ${formatDate(nascimento)}`
        document.getElementById('funcaoModal').innerHTML = `<strong>Função: </strong>${selectTexto(funcao)}</p>`
        document.getElementById('admissaoModal').innerHTML = `<strong>Data de Admissão: </strong>${formatDate(admissao)}</p>`
        document.getElementById('experienciaModal').innerHTML = `<strong>Contrato de Experiência: </strong>${selectTexto(experiencia)}</p>`

        if(modal.style.display != 'flex'){
            modal.style.display = 'flex'
            body.style.overflow = 'hidden'
        }else{
            modal.style.display = 'none'
            body.style.overflow = 'auto'
        }


    }else{
        if(msgP.textContent){
            msg.style.padding = '6px 15px'
            msg.style.border = '1px solid rgb(255, 142, 142)'
            msgP.style.display = 'inline'
        }
    }
  
}


//Função de formatar data
function formatDate(data) {
    const date = new Date(data);

    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);

    const day = String(utcDate.getDate()).padStart(2, '0');
    const month = String(utcDate.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const year = utcDate.getFullYear();
    return `${day}/${month}/${year}`;
}

// função de pegar texto do select
function selectTexto(id){
    const option = id.options[id.selectedIndex];
    const textoSelecionado = option.textContent || option.innerText;
    return textoSelecionado
}