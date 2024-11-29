const express = require('express');
const router = express.Router();
const path = require('path');

const { getProdutos, postProduto, putProduto, deleteProduto } = require(path.join(__dirname, '../controller/produtosController.js'));

router.get('/produtos', getProdutos);
router.post('/produtos', postProduto);
router.put('/produtos/:id', putProduto);
router.delete('/produtos/:id', deleteProduto);

module.exports = { produtosRouter: router }