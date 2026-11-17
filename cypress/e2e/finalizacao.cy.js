
const finalizacaoPage = require ('../pages/Finalizacao')
const { faker } = require('@faker-js/faker')

describe ('Processo de Checkout', ()=>{
    beforeEach(()=>{
        finalizacaoPage.acessarLogin()
        finalizacaoPage.realizarLogin()
        finalizacaoPage.validarLogin()    
        finalizacaoPage.adicionarProdutosAoCarrinho()
        finalizacaoPage.validarProdutosAdicionadosAoCarrinho()     
    })
       
    it ('Deve confirmar os produtos e ir para checkout',()=>{
        const dados = {
          nome: faker.person.firstName(),
          sobrenome: faker.person.lastName(),
          email: faker.internet.email(),
          telefone: faker.string.numeric(10),
          endereco: faker.location.streetAddress(),
          cidade: faker.location.city()
}
        finalizacaoPage.iniciarCheckout()
        finalizacaoPage.inserirDadosCheckout(dados)
        finalizacaoPage.validarCheckout()
    })
})