const http = require('http');

const port = 3000;

const handleHome = (res) => {
    res.statusCode = 200;
    res.end('Bem-vindo à pagina inicial!');
}

const handleAbout = (res) => {
    res.statusCode = 200;
    res.end('Esta é a página sobre nós.')
}

const handleContact = (res) => {
    res.statusCode = 200;
    res.end('Entre em contato conosco através dessa página.');
}

const handleNotFound = (res) => {
    res.statusCode = 404;
    res.end('Página não encontrada.');
}

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    switch (req.url) {
        case '/':
            handleHome(res);
            break;
        case '/sobre':
            handleAbout(res);
            break;
        case '/contato':
            handleContact(res);
            break;
        default:
            handleNotFound(res);
            break;
    }
}

const server = http.createServer(requestHandler);

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})

/*
    Próximos exercícios: 

    Cria uma rota específica para receber dados via método GET.
    Crie uma rota específica para receber dados via método POST.
    Crie uma rota específicia para carregar um determinado arquivo HTML.
*/