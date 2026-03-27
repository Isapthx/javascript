const http = require('http');
const url = require('url');

const port = 3000;
const endereco = 'http://localhost:3000'

const server = http.createServer((req, res) => {
    // const parsedURL = url.parse(req.url, true);
    // const path = parsedURL.path

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    
    if(req.url == '/ola') { // oath == '/ola também pode ser usado
        res.write('Olá, você acessou a rota /ola');
        res.end();
    } else if (req.url == '/') {
        res.end(`Olá! \nVocê acessou o Echo Server!`);
    } else {
        res
        res.end("Página não encontrada.");
    } 
})

server.listen(port, () => {
    console.log(`Servidor rodando em ${endereco}`);
})