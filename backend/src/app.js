const express = require('express');
const rotas = require('./routes');
require('./database');
const cors = require('cors');

// Iniciando a aplicação
const app = express();

// Nas requisições podem ter dados tipo Json
app.use(express.json());

//Habilitar o cors para qualquer origem
app.use(cors());

// Cadastrando as rotas
app.use(rotas);
// Exportar a aplicação configurada
module.exports = app;
