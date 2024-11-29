const path = require('path');

const { getAllProducts } = require(path.join(__dirname, '../service/productsService.js'));

const getProducts = async (req, res) => {
    try {
        const produtos = await getAllProducts();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
        res.status(500).json({ error: 'Erro ao obter os produtos' });
    }
};

const postProducts = async (req, res) => { 

}

const putProduct = async (req, res) => { 
    
}

const deleteProduct = async (req, res) => { 
    
}

module.exports = { getProducts, postProducts, putProduct, deleteProduct };