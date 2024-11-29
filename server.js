const express = require("express");
const {json} = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const hostName = 'localhost';

const { productsRouter } = require('./routes/productsRouter.js');

app.use(cors());
app.use(json());
app.use('/', productsRouter);

app.listen(port, () =>{
    console.log(`Server listening on http://${hostName}:${port}`);
});