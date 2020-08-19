const Aluno = require("../models/Aluno");
const bcrypt= require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json");

module.exports = {
    async store(request,response){
        const {email,senha} = request.body;

        //Verificar se o aluno existe e os dados estao corretos
        const aluno = await Aluno.findOne({
            where : {
                email: email,
            }
        });

        //se não existir retorno erro ou senha estiver incorreto
    
            if(!aluno || !await bcrypt.compare(senha,aluno.senha)){
                response.status(403).send({erro:"Usuario e/ou senha invalidos"});
            }


            const  token = jwt.sign( {alunoId: aluno.id} , auth.secret);
        //se existir e a senha estiver correta retorna ok com o token
                response.status(201).send({
                    aluno:{
                        alunoId: aluno.id,
                        nome:aluno.nome,
                        ra:aluno.ra
                    },
                    token
                    });
    }
}