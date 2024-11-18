const express = require("express");
const {json} = require("express");

const app = express();
const port = 3000;
const hostName = 'localhost';

const { produtosRouter } = require('./routes/produtosRouter.js');

app.use(json());
app.use('/', produtosRouter);

app.listen(port, () =>{
    console.log(`Server listening on http://${hostName}:${port}`);
});