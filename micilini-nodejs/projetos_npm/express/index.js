const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Meu primeiro Servidor com Express =D</h1>'); // resposta em html por padrão
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
})