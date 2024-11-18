const express = require('express');
const router = express.Router();
const path = require('path');

const { getProdutos } = require(path.join(__dirname, '../controller/produtosController.js'));

// function getProdutos(req, res){
//     const produtos = { "id": 'teste'};
//     res.status(200).json(produtos);
// }

router.get('/produtos', getProdutos);

module.exports = { produtosRouter: router }
