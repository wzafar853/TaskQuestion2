Cypress.Commands.add('login', () => {
    const email = 'ejaz@multion.ai'
    const password = 'Qwer123!@#'
    cy.visit('https://platform.multion.ai/login', {
        failOnStatusCode: false,
      });
      // Alternatively, verify that you have been redirected to the login page and then handle login
      cy.url().then((url) => {
        if (url.includes('/login')) {
          // Perform login steps if redirected to login
          cy.get('.text-xl').should('have.text','Sign in to MultiOn');
          cy.get('input[type ="email"]').type(email)
          cy.get('input[type ="password"]').type(password)
          cy.get('#submit').click()
        }
      });
      // cy.wait(7000)
      // cy.url().should('include', '/beta');
      // cy.wait(3000)
      // cy.get('.chakra-modal__close-btn.css-dohrcy').click()
      // cy.get('.select-none > .justify-center').should('be.visible');
      cy.url().should('include','/playground');
  });

  Cypress.Commands.add('Stagelogin', () => {
    const email = 'ejaz+stage@multion.ai'
    const password = 'Qwer123!@#'
    cy.visit('https://platform.multion.tech/login', {
        failOnStatusCode: false,
      });
      // Alternatively, verify that you have been redirected to the login page and then handle login
      cy.url().then((url) => {
        if (url.includes('/login')) {
          // Perform login steps if redirected to login
          cy.get('.text-xl').should('have.text','Sign in to MultiOn');
          cy.get('input[type ="email"]').type(email)
          cy.get('input[type ="password"]').type(password)
          cy.get('#submit').click()
        }
      });
      cy.url().should('include','/playground');
  });
