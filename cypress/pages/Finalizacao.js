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

export function adicionarProdutosAoCarrinho(){
    cy.get('[data-testid="add-to-cart-p1"]')
      .click()
    cy.get('[data-testid="add-to-cart-p2"]')
      .click()
}

export function validarProdutosAdicionadosAoCarrinho(){
    cy.get('[data-testid="cart-badge"]')
      .should('be.visible')
      .and('not.have.text', '0')
}

export function iniciarCheckout (){
    cy.get('[data-testid="cart-link"]')
      .click()
    cy.get('[data-testid="checkout-button"]')
      .click()
}

export function inserirDadosCheckout(dados){
    cy.get('[data-testid="first-name"]')
      .type(dados.nome)

   cy.get('[data-testid="last-name"]')
    .type(dados.sobrenome)
        
    cy.get('[data-testid="email"]')
      .type(dados.email)
        
    cy.get('[data-testid="phone"]')
      .type(dados.telefone)
        
    cy.get('[data-testid="address"]')
      .type(dados.endereco)

    cy.get('[data-testid="city"]')
      .type(dados.cidade)

    cy.get('[data-testid="state"]')
      .select('California')
        
    cy.get('[data-testid="zip"]')
      .type('55555555')

    cy.get('[data-testid="shipping-express"]')
      .click()

    cy.get('[data-testid="payment-cod"]')
      .click()
        
    cy.get('[data-testid="accept-terms"]')
      .click()

    cy.get('[data-testid="place-order"]')
      .click()
}

export function validarCheckout(){
    cy.url()
      .should ('include', '/checkout/complete')

    cy.get('[data-testid="order-success-title"]')
      .should('be.visible')
      .and('contain', 'Thank you for your order!')
}