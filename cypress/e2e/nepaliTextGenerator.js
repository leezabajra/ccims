// nepaliTextGenerator.js

// Define Nepali characters
const nepaliCharacters = ['अ', 'आ', 'इ', 'ई', 'उ', 'ऊ', 'ऋ', 'ए', 'ऐ', 'ओ', 'औ', 'क', 'ख', 'ग', 'घ', 'ङ', 'च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण','त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','क्ष','त्र','ज्ञ'];

// Function to generate Nepali text of a given length
function generateNepaliText(length) {
  let nepaliText = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * nepaliCharacters.length);
    nepaliText += nepaliCharacters[randomIndex];
  }
  return nepaliText;
}

// Export the function so it can be used in other files
module.exports = generateNepaliText;
