const { Usuario } = require("../models");
const { Op } = require('sequelize');
const { insertProduct } = require("./productsService");

async function validateLogin(req) {
    try {
        const user = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if (req.body.email === user.email && req.body.senha === user.senha) {
            return {
                "primeiroNome": user.primeiroNome,
                "papel": user.papel,
                "email": user.email
            }
        } else {
            return "Email ou senha incorreto(s)."
        }
    } catch (error) {
        console.error('Erro ao fazer login: ', error);
        return "Erro ao fazer login:";
    }
}

async function insertUser(req) {
    try {
        const emailExists = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        
        if (emailExists) {
            return {
                success: false,
                message: "E-mail já cadastrado",
            };
        } else {
            const user = await Usuario.create({
                "primeiroNome": req.body.primeiroNome,
                "ultimoNome": req.body.ultimoNome,
                "email": req.body.email,
                "senha": req.body.senha,
                "papel": req.body.papel
            });
            return {
                success: true,
                message: "Usuário salvo com sucesso",
                data: user
            };
        }
    } catch (error) {
        console.error('Erro ao salvar: ', error);
        return "Erro ao salvar";
    }
}

module.exports = { validateLogin, insertUser }