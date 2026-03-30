const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Meu primeiro servidor com Express =D');
})

app.get('/usuario/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);
    
    res.send(`ID de usuário: ${id}.`);
})

app.get('/usuario/:id/:nome/:email', (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    const email = req.params.email;
    res.send(`ID do Usuário: ${id}, Nome: ${nome}, Email: ${email}`);
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})