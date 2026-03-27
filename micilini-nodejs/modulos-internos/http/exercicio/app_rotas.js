const http = require('http');
const qString = require('querystring');
const fs = require('fs');
const pth = require('path');
const url = require('url');

const port = 3000;

const handlePOST = (req, res) => {
    let body = '';
    
    req.on('data', chunk => {
        body += chunk;
    })

    req.on('end', () => {
        const parsedBody = qString.parse(body);

        const parsedNome = parsedBody.nome;
        const parsedSobrenome = parsedBody.sobrenome;

        if (parsedNome && parsedSobrenome) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Olá, ${parsedNome} ${parsedSobrenome}! \nSeja bem-vindo ao meu servidor!`);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Nome e sobrenome são necessários.');
        }
    })
}

const handleGET = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk;
    })

    req.on('end', () => {
        // const parsedBody = qString.parse(body);
        const params = url.parse(req.url, true).query;
        const nome = params.nome;
        const idade = params.idade;

        if (nome && idade) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Olá ${nome}, você tem ${idade} anos. \nSeja bem-vindo(a) ao meu servidor!`);
        } else {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Nome e idade são necessários.');
            
        }
    })
}

const handleForm = (res) => {
    const filePath = pth.join(__dirname, 'form.html');

    

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end(`Erro ao ler o arquivo: ${err}.`);
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(data);
        }
    })
}

const handleNotFound = (req, res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const parsedUrl = url.parse(req.url, true);

    res.write(`Método: ${req.method} \nPath: ${parsedUrl.pathname}\n`)
    res.end('Página não encontrada ou método usado inválido.');
}

const launch = (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.url == '/') {
        handleForm(res);
    } else if (parsedUrl.pathname == '/get' || req.url == '/post') {
        if (req.method === 'POST') {
            handlePOST(req, res);
        } else if (req.method === 'GET') {
            handleGET(req, res);
        } else {
            handleNotFound(req, res);
        }
    } else {
        handleNotFound(req, res);
    }
}

server = http.createServer(launch);

server.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}/.`);
})