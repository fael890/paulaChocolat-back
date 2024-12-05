const express = require('express');
const router = express.Router();
const path = require('path');

const { getProducts, postProduct, putProduct, deleteProduct } = require(path.join(__dirname, '../controller/productsController.js'));

router.get('/produtos', getProducts);
router.post('/produtos', postProduct);
router.put('/produtos/:id', putProduct);
router.delete('/produtos/:id', deleteProduct);

module.exports = { productsRouter: router }