const express = require('express');
const app = express();
const port = 8080;

const setHeaders = (res, headers) => {
    for (const [key, value] of Object.entries(headers)) {
        res.setHeader(key, value);
    }
};

app.get('/', (req, res) => {
    const headers = {
        'X-Custom-Header': 'Este é um cabeçalho personalizado',
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
    };

    setHeaders(res, headers);

    res.send('Olá. mundo! Esta é uma resposta com múltiplos cabeçalhos');
})

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})