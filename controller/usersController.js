const path = require('path');

const { validateLogin } = require(path.join(__dirname, '../services/usersService.js'));

const authenticateLogin = async (req, res) => {
    try {
        const login = await validateLogin(req);
        res.status(200).json(login);
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
}

module.exports = { authenticateLogin }