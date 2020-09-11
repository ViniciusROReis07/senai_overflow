const Comentario = require("../models/Comentario");
const Postagem = require("../models/Postagem");
const { index } = require("./postagem");
const { response } = require("express");

module.exports = {
  // Implementa a listagem de comentários
  async index(request, response) {
    const { postId } = request.params;
    const postagem = await Postagem.findByPk(postId);
    console.log(request.params);

    if (!postagem) {
      return response.status(404).send({ erro: "Postagem não encontrada" });
    }

    let comentarios = await Comentario.findAll({
      include: {
        association: "Aluno",
        attributes: ["nome", "ra", "id"],
      },
      order: [["created_at", "ASC"]],
      attributes: ["descricao", "created_at", "id"],
    });

    response.send(comentarios);
  },

  // Implementar a inserção de comentário
  async store(request, response) {
    const id_aluno = request.alunoId;

    const { postId } = request.params;

    const { descricao } = request.body;

    try {
      const postagem = await Postagem.findByPk(postId);

      if (!postagem) {
        response.status(404).send({ erro: "Postagem não encontrada" });
      }
      let comentario = await postagem.createComentario({
        descricao,
        aluno_id: id_aluno,
      });

      comentario = comentario.dataValues;
      comentario.post_id = comentario.postagemId;
      delete comentario.postagemId;
      delete comentario.id_aluno;

      response.status(201).send(comentario);
    } catch (error) {
      return response.status(500).send({
        erro: "Não foi possível cadastrar a comentario, tente novamente.",
      });
    }
  },
};
