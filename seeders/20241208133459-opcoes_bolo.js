'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OpcoesBolo',
      [
        {
          "tipo": 1,
          "nome":"nome do item",
          "descricao":"descricao do item",
          "imagem":"URL imagem",
        },
        {
          "tipo": 2,
          "nome":"nome do 2",
          "descricao":"descricao do item2",
          "imagem":"URL imagem2",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OpcoesBolo", null, {});
  }
};
