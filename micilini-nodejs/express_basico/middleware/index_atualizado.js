const express = require('express');
const app = express();
const port = 3000;
const endereco = `http://localhost:${port}/`

const authUser = (req, res, next) => {
    req.authUser = false;

    if (req.authUser) {
        console.log('Usuário Autenticado!');
        next();
    } else {
        // 401 - Unauthorized, cliente não autorizado, ou seja, desconhecido
        // 403 - Forbidden, o servidor entendeu a requisição e o cliente é conhecido, porém, o servidor recusa autorizá-lo pois o cliente não possui permissão para o acesso
        res.status(401); 
        console.log('Usuário não Autenticado.');
        res.send('Usuário não Autenticado.');
    }
}
const setHeaders = (res, headers) => {
    for (const [key, value] of Object.entries(headers)) {
        res.setHeader(key, value);
    }
};

const headers = {
    'Content-Type': 'text/plain',
    'Cache-Control': 'no-cache'
};

app.get('/', (req, res) => {
    res.status(200);
    setHeaders(res, headers);
    res.send(`Bem vindo ao meu primeiro servidor!\n\nPágina Inicial: ${endereco}home \n\nPágina Sobre Nós: ${endereco}sobre \n\nPágina de Contato: ${endereco}contato \n\nDashboard (autenticação necessária): ${endereco}dashboard`);
})

// Página principal
app.get('/home', (req, res) => {
    res.status(200);
    setHeaders(res, headers);
    res.send('Página Inicial');
});

// Rota para a página de sobre
app.get('/sobre', (req, res) => {
    res.status(200);
    setHeaders(res, headers);
    res.send('Página de Sobre');
});

// Rota para a página de contato
app.get('/contato', (req, res) => {
    res.status(200);
    setHeaders(res, headers);
    res.send('Página de Contato');
});

// Quando criamos um parâmetro entre a URL e o callback, estamos criando um middleware que está relacionado exclusivamente com aquela rota, por isso não foi utilizado o app.use() no script
// Entre a URL e a sua função de callback, você pode inserir quantos middlewares você quiser, não tem um limite específico.
app.get('/dashboard', authUser, (req, res) => {
    res.status(200);
    setHeaders(res, headers);
    res.send('Página de Dashboard');
})

app.use((req, res, next) => {
  res.status(404).send('Desculpe, não conseguimos encontrar essa página.');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`)
})