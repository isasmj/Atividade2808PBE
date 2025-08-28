const express = require("express");
const app = express();


const PORT = 6660;
app.listen('/', (req, res) => {
    console.log(`Projeto 1 Servidor de Usuários - Servidor respondendo na porta ${PORT}`);
});
