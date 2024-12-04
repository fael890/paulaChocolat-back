//const { Op } = require('sequelize');

const { Produto } = require("../models");

async function getAllProducts() {
    return await Produto.findAll();
}

module.exports = { getAllProducts };