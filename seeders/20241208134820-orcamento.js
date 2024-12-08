'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.bulkInsert('Orcamento',
    //   [
    //     { 
    //       "massa": 0,
    //       "recheio1": 0,
    //       "recheio2": 0,
    //       "cobertura": 0,
    //       "frase": "frase no bolo",
    //       "data": "20-12-2010",
    //       "usuarioId": 1,
    //     },
    //     { 
    //       "massa": 1,
    //       "recheio1": 1,
    //       "recheio2": 1,
    //       "cobertura": 2,
    //       "frase": "frase no bolo2",
    //       "data": "10-10-2003",
    //       "usuarioId": 2,
    //     },
    //     { 
    //       "massa": 3,
    //       "recheio1": 4,
    //       "recheio2": 5,
    //       "cobertura": 3,
    //       "frase": "frase no bolo3",
    //       "data": "10-10-2020",
    //       "usuarioId": 1,
    //     },
    //   ],
    //   {}
    // );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
