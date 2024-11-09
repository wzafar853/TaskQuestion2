class SignupPage {
    visit() {
      cy.visit('https://www.zoho.com/mail/');
    }
    
    fillSignupForm(email, username, password) {
      cy.get('#fullname').type(username);
      cy.get('#emailmoile').type(email);
      cy.get('#password').type(password);
      cy.get('#signup-termservice').click()
    }
  
    submitForm() {
      cy.get('#signupbtn').click();
    }
  
    verifyPageNavigation() {
      cy.get('.verifytitle').should('have.text','Verify your sign-up')
      //cy.url().should('include', '/verification');
    }
  }
  
  export default SignupPage;
  