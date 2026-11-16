const loginPage = require('../pages/Login')

describe ('Login', ()=>{
    it('Deve fazer login com sucesso',()=>{
        loginPage.acessarLogin()
        loginPage.realizarLogin()
        loginPage.validarLogin()

    })
})