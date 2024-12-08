const path = require('path');

const { validateLogin, insertUser } = require(path.join(__dirname, '../services/usersService.js'));

const authenticateLogin = async (req, res) => {
    try {
        const login = await validateLogin(req);
        res.status(200).json(login);
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
}

const userRegister = async (req, res) => {
    try {
        const result = await insertUser(req);
        if (result.success) {
            res.status(201).json(result);
        } else {
            res.status(409).json(result);
        }
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ 
            success: false, 
            message: "Erro interno no servidor", 
            error: error.message 
        });
    }
}

module.exports = { authenticateLogin, userRegister }