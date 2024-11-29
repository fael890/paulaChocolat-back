const path = require('path');

const { Product } = require(path.join(__dirname, '../model/Product.js'))

const getAllProducts = async () => {
    const product = new Product();

    return product.getAllProducts();
};

module.exports = { getAllProducts };