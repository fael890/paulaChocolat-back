//const { Op } = require('sequelize');

const { Produto } = require("../models");

async function selectAllProducts() {
    return await Produto.findAll();
}

async function insertProduct(req) {
    try {
        const produto = await Produto.create({
            "titulo": req.body.titulo,
            "descricao": req.body.descricao,
            "preco": req.body.preco,
            "imagem": req.body.imagem
        });
        return {
            success: true,
            message: "Produto salvo com sucesso",
            data: produto
        };
    } catch (error) {
        console.error('Erro ao salvar: ', error);
        return "Erro ao salvar";
    }
}

async function updateProductById(req) {
    try {
        let produto = await Produto.findByPk(req.params['id']);
        if(produto) {
            produto.titulo = req.body.titulo;
            produto.descricao = req.body.descricao;
            produto.preco = req.body.preco;
            produto.imagem = req.body.imagem;
            await produto.save();
            return {
                success: true,
                message: "Produto atualizado com sucesso",
                data: produto
            }
        } else {
            return {
                success: false,
                message: "Não for possível atualizar o produto",
            }
        }
    } catch (error) {
        console.error('Erro ao atualizar: ', error);
        return "Erro ao atualizar";
    }
}

async function deleteProductById(req) {
    try {
        const produto = await Produto.findByPk(req.params['id']);
        if(produto) {
            await produto.destroy();
            return {
                success: true,
                message: "Produto deletado com sucesso",
                data: produto
            }
        } else {
            return {
                success: false,
                message: "Produto não existe",
            }
        }
    } catch (error) {
        console.error('Erro ao deletar: ', error);
        return "Erro ao deletar";
    }
}

module.exports = { selectAllProducts, insertProduct, deleteProductById, updateProductById };