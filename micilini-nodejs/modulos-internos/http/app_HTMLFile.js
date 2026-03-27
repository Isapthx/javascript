const http = require('http');
const fs = require('fs');
const pth = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = pth.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erro ao ler arquivo');
            return;
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/HTML');
            res.end(data);
        }
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})