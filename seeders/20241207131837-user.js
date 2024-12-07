'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuario',
      [
        {
          "id": 1,
          "primeiroNome": "Rafael",
          "ultimoNome": "Capodeferro",
          "email": "marinho@gmail.com",
          "senha": "123456",
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
