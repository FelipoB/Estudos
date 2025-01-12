// Chance.js é uma biblioteca que permite gerar dados aleatórios, como nomes, endereços, números, etc.
// No contexto do Cypress, podemos usar o Chance.js para gerar nomes randomizados durante os testes.

const Chance = require('chance');
const chance = new Chance();

// Exemplo de uso do Chance.js para gerar um nome randomizado
const randomName = chance.name();
console.log(`Nome randomizado: ${randomName}`);

// ...existing code...
