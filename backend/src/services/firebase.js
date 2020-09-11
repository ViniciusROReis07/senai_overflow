var admin = require("firebase-admin");

var serviceAccount = require("../config/firebase-key.json");

const BUCKET = "senai-overflow32.appspot.com";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const uploadImage = (request, response, next) => {

  if (!request.file) return next();

  const imagem = request.file;
  const nomeArquivo = Date.now() + "." + imagem.originalname.split(".").pop();

  const file = bucket.file(nomeArquivo);

  const stream = file.createWriteStream({
    metadata: {
      contentType: imagem.mimetype,
    },
  });

  stream.on("error", (e) => {
    console.error(e);
  });

  stream.on("finish", async () => {
    // Tornando o arquivo publico
    await file.makePublic();
    // obter url publica
    request.file.firebaseUrl = `http://storage.googleapis.com/${BUCKET}/${nomeArquivo}`;

    console.log("passou por aqui!!!", request.file.firebaseUrl);

    next();
  });

  stream.end(imagem.buffer);
};

module.exports = uploadImage;
