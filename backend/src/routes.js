// Esse arquivo tem como responsabilidade cadastrar as rotas da aplicação

const express = require("express");

// Criando o roteirizador
const routes = express.Router();

const autorizacaoMid = require("./middlewares/autoricacao");

const alunoController = require("./controllers/aluno");
const postagemController = require("./controllers/postagem");
const comentarioController = require("./controllers/comentario");
const sessaoController = require("./controllers/sessao");

//rotas publicas
routes.post("/sessao",sessaoController.store);
routes.post("/alunos", alunoController.store);

routes.use(autorizacaoMid);

// Rotas de aluno
routes.get("/alunos", alunoController.list);
routes.get("/alunos/:id", alunoController.searchById);

// Rotas de postagem
routes.get("/postagens", postagemController.index);
routes.post("/postagens", postagemController.store);
routes.delete("/postagens/:id", postagemController.delete);

// Rotas de comentário
routes.post("/postagens/:postId/comentarios", comentarioController.store);
routes.get("/postagens/:postId/comentarios", comentarioController.index);



module.exports = routes;