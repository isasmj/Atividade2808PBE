const express = require("express");
const app = express();


const PORT = 3000;
app.listen('/', (req, res) => {
    console.log(`Projeto 1 Servidor de Usuários - Servidor respondendo na porta ${PORT}`);
});

