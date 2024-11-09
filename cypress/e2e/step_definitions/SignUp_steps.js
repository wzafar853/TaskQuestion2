import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignupPage from '../../support/pages/SignupPage';
import DashboardPage from '../../support/pages/DashboardPage';

const generateUniqueEmail = () => {
    const timestamp = new Date().getTime();  
    return `wzafar853${timestamp}@rmgu60k1.mailosaur.net`;  
  };
const email = generateUniqueEmail()

const signupPage = new SignupPage();
const dashboardPage = new DashboardPage();

Given('I am on the Zoho Mail signup page', () => {
  signupPage.visit();
});

When('I sign up with valid details', () => {
  const username = 'TestUser123';
  const password = 'TestPassword123';
  signupPage.fillSignupForm(email, username, password);
  signupPage.submitForm();
  cy.wait(10000)
});

Then('I should receive a verification email', () => {
  signupPage.verifyPageNavigation();
  

});

When('I retrieve and enter the verification code', () => {
    cy.mailosaurGetMessage("rmgu60k1", {
        sentTo: email,},
        {
            timeout: 20000, 
          }).then((email) => {
            cy.log('Email subject:', email.subject); 
            console.log(email)


    const otp = email.text.codes[1].value; 
    console.log('OTP extracted:', otp);
    cy.get('#otpfield').type(otp);
    cy.get('.za-submitbtn-otp > .signupbtn').click();
  
            
          });

      });

Then('I should be logged into my Zoho Mail account', () => {
  dashboardPage.verifyLoginSuccess();
});
