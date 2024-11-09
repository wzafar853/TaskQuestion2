// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('paymentRequest Element didn\'t mount normally')) {
    // Log error for debugging purposes
    console.error('Ignored error:', err);
    // Return false to prevent Cypress from failing the test
    return false;
  }
});
Cypress.on('uncaught:exception', (err, runnable) => {
  // Ignore errors from a known third-party script
  if (err.message.includes('Third-party script error')) {
    return false;
  }
});
import 'cypress-mochawesome-reporter/register';

require ('cypress-iframe')
// Import commands.js using ES2015 syntax:
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
// Alternatively you can use CommonJS syntax:
// require('./commands')
import './commands';
import "cypress-mailosaur";

