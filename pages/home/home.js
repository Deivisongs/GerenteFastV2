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