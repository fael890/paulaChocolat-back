'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OpcoesBolo',
      [
        {
          "tipo": 0,
          "nome":"cobertura",
          "descricao":"descricao da cobertura",
          "imagem":"URL imagem",
        },
        {
          "tipo": 1,
          "nome":"recheio1",
          "descricao":"descricao do recheio1",
          "imagem":"URL imagem2",
        },
        {
          "tipo": 2,
          "nome":"recheio2",
          "descricao":"descricao do recheio2",
          "imagem":"URL imagem",
        },
        {
          "tipo": 3,
          "nome":"massa",
          "descricao":"descricao da massa",
          "imagem":"URL imagem2",
        },
        {
          "tipo": 0,
          "nome":"cobertura2",
          "descricao":"descricao da cobertura2",
          "imagem":"URL imagem2",
        },
        {
          "tipo": 1,
          "nome":"recheio12",
          "descricao":"descricao do recheio12",
          "imagem":"URL imagem2",
        },
        {
          "tipo": 2,
          "nome":"recheio22",
          "descricao":"descricao do recheio22",
          "imagem":"URL imagem2",
        },
        {
          "tipo": 3,
          "nome":"massa2",
          "descricao":"descricao da massa2",
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
