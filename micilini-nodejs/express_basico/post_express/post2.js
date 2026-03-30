const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const basePath = path.join(__dirname, 'html');
const dadosMiddleware = [
    app.use(express.urlencoded({extended : true})),
    app.use(express.json())
]

app.post('/dados',
    dadosMiddleware,
    (req, res) => {
    res.status(200);
    console.log('Dados recebidos com sucesso!');
    res.send(`Nome: ${req.body.nome} \nSobrenome: ${req.body.sobrenome}`);
})

app.get('/', (req, res) => {
    res.status(200);
    res.send('Meu primeiro Servidor com Express =D');
})

app.get('/form', (req, res) => {
    res.status(200);
    res.sendFile(`${basePath}/post1.html`);
})

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})