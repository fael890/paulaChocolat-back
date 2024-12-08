const path = require('path');

const { selectAllProducts, insertProduct, deleteProductById, updateProductById, insertProductImage } = require(path.join(__dirname, '../services/productsService.js'));

const getProducts = async (req, res) => {
    try {
        const produtos = await selectAllProducts();
        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
        res.status(500).json({ error: 'Erro ao obter os produtos' });
    }
};

const postProduct = async (req, res) => { 
    try {
        const result = await insertProduct(req);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Erro ao processar o salvamento do produto:', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

const putProduct = async (req, res) => { 
    try {
        const result = await updateProductById(req);
        if(result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Erro ao atualizar produto', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

const deleteProduct = async (req, res) => { 
    try {
        const result = await deleteProductById(req);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result); 
        }
    } catch (error) {
        console.error('Erro ao deletar produto:', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

const uploadImage = async (req, res) => {
    try {
        const result = await insertProductImage(req);
        if (result.success) {
            res.status(200).json(result);
        } else {
            res.status(400).json(result);
        }
    } catch (error) {
        console.error('Erro ao processar o salvar imagem:', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

module.exports = { getProducts, postProduct, putProduct, deleteProduct, uploadImage };