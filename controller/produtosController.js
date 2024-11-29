const path = require('path');

const { getAllProducts } = require(path.join(__dirname, '../model/produtosModel.js'));

const getProdutos = async (req, res) => {
    try {
        const produtos = await getAllProducts();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
        res.status(500).json({ error: 'Erro ao obter os produtos' });
    }
};

const postProduto = async (req, res) => { 

}

const putProduto = async (req, res) => { 
    
}

const deleteProduto = async (req, res) => { 
    
}

module.exports = { getProdutos, postProduto, putProduto, deleteProduto };