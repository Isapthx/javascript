const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.end('Bem-vindo à página inicial!');
            break;
        case '/sobre':
            res.statusCode = 200;
            res.end('Esta é a página sobre nós.');
            break;
        case '/contato':
            res.statusCode = 200;
            res.end('Entre em contato conosco através desta página.');
            break;
        default:
            res.statusCode = 404;
            res.end('Página não encontrada.');
            break;
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`);
})