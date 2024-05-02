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

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// ESM


// CJS


import  '@faker-js/faker';

const { faker } = require('@faker-js/faker');
function createRandomUser(){
    return {
      userId: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.past(),
      registeredAt: faker.date.past(),
    };
  }
  
  const USERS = Array.from({ length: 5 }, createRandomUser);
  
  module.exports = {
    createRandomUser,
    USERS
  };