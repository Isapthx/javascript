const http = require('http')
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-html');

    res.write('<h1>Meu primeiro servidor!!!</h1>');
    res.write('<p>Estou aprendendo a criar servidores HTTP com Node.js!</p>');

    res.end();
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost/${port}`);
})