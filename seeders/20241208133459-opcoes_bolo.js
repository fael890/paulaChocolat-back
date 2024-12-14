'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OpcoesBolo',
      [
        {
          "tipo": 3,
          "nome":"Chocolate",
          "descricao":"Um classico feito com chocolate 70% cacau.",
          "imagem":"massa_chocolate.jpg",
        },
        {
          "tipo": 3,
          "nome":"Baunilha",
          "descricao":"Massa de sabor delicado para evidenciar o recheio.",
          "imagem":"massa_baunilha.jpg",
        },
        {
          "tipo": 3,
          "nome":"Red Velvet",
          "descricao":"Sabor e aparência marcantes.",
          "imagem":"massa_red_velvet.jpg",
        },
        {
          "tipo": 1,
          "nome":"Brigadeiro",
          "descricao":"O preferido dos brasileiros.",
          "imagem":"recheio_brigadeiro.jpg",
        },
        {
          "tipo": 1,
          "nome":"Doce de Leite",
          "descricao":"Cremoso e aveludado",
          "imagem":"recheio_doce_de_leite.jpg",
        },
        {
          "tipo": 1,
          "nome":"Creme",
          "descricao":"Clássico e elegante.",
          "imagem":"recheio_creme.jpg",
        },
        {
          "tipo": 2,
          "nome":"Brigadeiro",
          "descricao":"O preferido dos brasileiros.",
          "imagem":"recheio_brigadeiro.jpg",
        },
        {
          "tipo": 2,
          "nome":"Doce de Leite",
          "descricao":"Cremoso e aveludado",
          "imagem":"recheio_doce_de_leite.jpg",
        },
        {
          "tipo": 2,
          "nome":"Creme",
          "descricao":"Clássico e elegante.",
          "imagem":"recheio_creme.jpg",
        },
        {
          "tipo": 0,
          "nome":"Ganache",
          "descricao":"Feito com chocolate 70% de cacau.",
          "imagem":"cobertura_ganache.jpg",
        },
        {
          "tipo": 0,
          "nome":"Chantilly",
          "descricao":"Leve e aerado.",
          "imagem":"cobertura_chantilly.jpg",
        },
        {
          "tipo": 0,
          "nome":"Fondant",
          "descricao":"Crocante e saboroso.",
          "imagem":"cobertura_fondant.jpg",
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("OpcoesBolo", null, {});
  }
};
