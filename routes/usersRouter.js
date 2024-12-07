const express = require('express');
const router = express.Router();
const path = require('path');

const { authenticateLogin } = require(path.join(__dirname, '../controller/usersController.js'));

router.post('/usuarios/login', authenticateLogin);


module.exports = { usersRouter: router }