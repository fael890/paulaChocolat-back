const express = require('express');
const router = express.Router();
const path = require('path');

const { authenticateLogin, userRegister } = require(path.join(__dirname, '../controller/usersController.js'));

router.post('/usuarios/login', authenticateLogin);
router.post('/usuarios/registro', userRegister);


module.exports = { usersRouter: router }