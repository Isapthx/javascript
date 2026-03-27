const express = require('express');
const path = require('path');

const app = express();
const port = 8080;
const basePath = path.join(__dirname, 'templates_html');

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`);
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
})