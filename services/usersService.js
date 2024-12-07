const { Usuario } = require("../models");
const { Op } = require('sequelize');

async function validateLogin(req) {
    try {
        const user = await Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        if(req.body.email === user.email && req.body.senha === user.senha) {
            return {    
                "primeiroNome": user.primeiroNome,  
                "papel": user.papel
            }
        } else {
            return "Email ou senha incorreto(s)."
        }
    } catch (error) {
        console.error('Erro ao fazer login: ', error);
        return "Erro ao fazer login:";
    }
}

module.exports = { validateLogin }