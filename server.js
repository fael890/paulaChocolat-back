const express = require("express");
const { json } = require("express");
const cors = require("cors");
const fileUpload = require('express-fileupload')
const path = require("path");

const app = express();
const port = 3000;
const hostName = 'localhost';

const { productsRouter } = require('./routes/productsRouter.js');
const { usersRouter } = require('./routes/usersRouter.js');
const { budgetsRouter } = require('./routes/budgetsRouter.js');

app.use(cors());
app.use(json());
app.use('/static', express.static(path.join(__dirname, 'public/static')));
app.use(fileUpload())
app.use('/', productsRouter);
app.use('/', budgetsRouter);
app.use('/', usersRouter);

app.listen(port, () =>{
    console.log(`Server listening on http://${hostName}:${port}`);
});