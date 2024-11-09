class DashboardPage {
    verifyLoginSuccess() {
      cy.url().should('include','/hosting');

    }
  }
  
  export default DashboardPage;
  