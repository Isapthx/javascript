const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.setHeader('X-Custom-Header', 'Este é um cabeçalho personalizado');

    res.setHeader('Content-Type', 'text/plain');

    res.send('Olá, mundo! Esta é uma resposta simples com cabeçalhos personalizados')
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}.`);
})