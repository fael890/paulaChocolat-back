'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario',
      [
        {
          "primeiroNome": "Rafael",
          "ultimoNome": "Capodeferro",
          "email": "marinho@gmail.com",
          "senha": "12345",
          "papel": "Gerente"
        },
        {
          "primeiroNome": "Carlos",
          "ultimoNome": "Amaral",
          "email": "carlos@gmail.com",
          "senha": "12345",
          "papel": "Cliente"
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Usuario", null, {});
  }
};
