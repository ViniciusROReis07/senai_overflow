const jwt = require("jsonwebtoken");
const auth = require("../config/auth.json");

module.exports = (request,response,next) => {
   const {authorization} = request.headers;

   if(!authorization){
       response.status(401).send({erro:"Token não informado"});
   }

   const [Bearer,token] = authorization.split(" ");

   console.log(token);
   if(!token){
       response.status(401).send({erro:"Token mal formatado"})
   }

   try{
    const retorno =  jwt.verify(token,auth.secret);

    request.alunoId = retorno.alunoId;

    return next();
   }catch(erro){
       response.status(401).send({erro:"Token invalido"});
   }

}