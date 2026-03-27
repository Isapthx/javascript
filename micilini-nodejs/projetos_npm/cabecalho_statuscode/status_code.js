const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.status(200);
    res.send('Meu Primeiro Servidor com Express =D');
})

app.use((req, res, next) => {
  res.status(404).send('Desculpe, não conseguimos encontrar essa página.');
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})