const carrinhoPage = require('../pages/Produtos')


describe('Carrinho',()=>{

    beforeEach(()=>{
      carrinhoPage.acessarLogin()
      carrinhoPage.realizarLogin()
      carrinhoPage.validarLogin()         
    })

    it('Deve adicionar produtos ao carrinho e validar',()=>{
      carrinhoPage.adicionarProdutosAoCarrinho()
      carrinhoPage.validarProdutosAdicionadosAoCarrinho()
    })

})