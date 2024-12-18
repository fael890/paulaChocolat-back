const express = require('express');
const router = express.Router();
const path = require('path');

const { getItems, getBudget, getBudgets, postBudget, putBudget, deleteBudget } = require(path.join(__dirname, '../controller/budgetsController.js'));

router.get('/orcamento/item', getItems);
router.get('/orcamento/pedido/:email', getBudgets);
router.get('/orcamento/pedido/id/:id', getBudget);
router.post('/orcamento/pedido', postBudget);
router.put('/orcamento/pedido/:id', putBudget);
router.delete('/orcamento/pedido/:id', deleteBudget);

module.exports = { budgetsRouter: router }