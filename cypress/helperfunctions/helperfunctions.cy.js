let newEmail = ''
/**
 * Generates a unique ID of a specified length.
 *
 * @param {number} length - The length of the unique ID to generate.
 * @returns {string} - The generated unique ID.
 */
 function generateUniqueId(length = 5) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  /**
   * Generates a random unique email address in the format ejaz+e2e{uniqueID}@multion.ai.
   *
   * @param {number} idLength - The length of the unique ID part of the email address.
   * @returns {string} - The generated unique email address.
   */
   function generateUniqueEmail(idLength = 5) {
    const uniqueId = generateUniqueId(idLength);
    newEmail = `wzafar853${uniqueId}@gmail.com`
    return newEmail;
  }

  function getNewEmail() {
    return newEmail
  }
 
/**
 * Extracts a verification URL from the given email body.
 * @param {string} emailBody - The HTML or text content of the email.
 * @returns {string|null} - The verification URL or null if not found.
 */
const extractVerificationLink = (emailBody) => {
  // Regular expression to match URLs
  const urlRegex = /https?:\/\/[^\s]+/;
  const match = emailBody.match(urlRegex);
  return match ? match[0] : null;
};

/**
 * Extracts a 6-digit verification code from the given email body.
 * @param {string} emailBody - The HTML or text content of the email.
 * @returns {string|null} - The 6-digit verification code or null if not found.
 */
function  extractVerificationCode (emailBody) {
  // Regular expression to match 6-digit code
  const codeRegex = /\b\d{6}\b/;
  const match = emailBody.match(codeRegex);
  return match ? match[0] : null;
};
  
  
export default {
    generateUniqueEmail,
    extractVerificationCode,
    extractVerificationLink,
    getNewEmail
};