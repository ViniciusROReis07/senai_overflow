//Esse arquivo tem como responsabilidade cadastrar as rotas da aplicação
const express = require("express");
//Criando roterizador
const routes = express.Router();

const alunoController = require("./controllers/aluno");
const postagensController = require("./controllers/postagem");
//Rotas de usuario
routes.post("/alunos", alunoController.store);

routes.get("/alunos", alunoController.listar);

routes.get("/alunos/:id", alunoController.buscarId);
//Rota de postagens
routes.post("/postagens", postagensController.store);

routes.delete("/postagens/:id", postagensController.delete);

module.exports = routes;
