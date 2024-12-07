const express = require("express");
const { json } = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const hostName = 'localhost';

const { productsRouter } = require('./routes/productsRouter.js');
const { usersRouter } = require('./routes/usersRouter.js');

app.use(cors());
app.use(json());
app.use('/', productsRouter);
app.use('/', usersRouter);

app.listen(port, () =>{
    console.log(`Server listening on http://${hostName}:${port}`);
});