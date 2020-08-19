const app = require('./app')

// Sobe a aplicação em um servidor(conteiner)
app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
});