const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Tela principal!');
})

app.get('/contato', (req, res) => {
    res.send('Tela de contato');
})

app.get('/sobre', (req, res) => {
    res.send('Tela sobre nós');
})

// Middleware para rota não encontrada (404)
app.use((req, res, next) => {
  res.status(404).send('Desculpe, não conseguimos encontrar essa página.');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}.`);
})