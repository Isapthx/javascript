const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.write('Meu primeiro servidor!!!');
    res.end();
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})