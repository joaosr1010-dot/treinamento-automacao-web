export function acessarLogin(){
    cy.visit ('https://www.practiceqaautomation.com/shop')

}

export function realizarLogin(){
    cy.get ('#username')
      .type('demo_user')
    cy.get ('#password')
      .type('Demo@123')
    cy.get('[data-testid="login-button"]')
      .click ()
}

export function validarLogin(){
    cy.url ()
      .should ('include', '/shop/products')
    cy.get('.text-3xl')
      .should('have.text','Products')
}