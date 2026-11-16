
const finalizacaoPage = require ('../pages/Finalizacao')

describe ('Processo de Checkout', ()=>{
    beforeEach(()=>{
        finalizacaoPage.acessarLogin()
        finalizacaoPage.realizarLogin()
        finalizacaoPage.validarLogin()    
        finalizacaoPage.adicionarProdutosAoCarrinho()
        finalizacaoPage.validarProdutosAdicionadosAoCarrinho()     
    })
       
    it ('Deve confirmar os produtos e ir para checkout',()=>{
        finalizacaoPage.iniciarCheckout()
        finalizacaoPage.inserirDadosCheckout()
        finalizacaoPage.validarCheckout()

    })
})