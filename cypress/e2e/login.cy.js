describe ('Login', ()=>{
    it('Deve fazer login com sucesso',()=>{
        cy.visit ('https://www.practiceqaautomation.com/shop')
        cy.get ('#username')
          .type('demo_user')
        cy.get ('#password')
          .type('Demo@123')
        cy.get('[data-testid="login-button"]')
          .click ()

        cy.url ()
          .should ('include', '/shop/products')
        cy.get('.text-3xl')
          .should('have.text','Products')

    })
})