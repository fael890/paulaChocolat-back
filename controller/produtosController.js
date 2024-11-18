const path = require('path');

const { getAllProducts } = require(path.join(__dirname, '../model/produtosModel.js'));

const getProdutos = async (req, res) => {
    try {
        const produtos = getAllProducts();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
        res.status(500).json({ error: 'Erro ao obter os produtos' });
    }
};

module.exports = { getProdutos };