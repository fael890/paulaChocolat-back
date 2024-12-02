'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orcamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      massa: {
        type: Sequelize.INTEGER
      },
      recheio1: {
        type: Sequelize.INTEGER
      },
      recheio2: {
        type: Sequelize.INTEGER
      },
      cobertura: {
        type: Sequelize.INTEGER
      },
      frase: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      usuarioId: {
        type: Sequelize.UUID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orcamentos');
  }
};