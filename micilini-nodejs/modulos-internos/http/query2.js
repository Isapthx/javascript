const http = require('http');
const url = require ('url');

const port = 3000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const queryParams = parsedUrl.query;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    let responseText = '';

    if(queryParams.nome && queryParams.idade) {
        responseText = `Olá ${queryParams.nome}!\nVocê tem ${queryParams.idade} anos.\nBem vindo ao nosso Servidor!`;
    } else {
        responseText = 'Olá!\nPor favor, forneça os parâmetros "nome" e "idade" na URL para uma mensagem personalizada.';
    }

    res.end(responseText);
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`);
})