const express = require('express');
const app = express();
const port = 3000;

app.get('/usuario/{:id}', (req, res) => {
    const id = Number.parseInt(req.params.id);

    if (id) {
        res.send(`ID do usuário: ${id}`);
    } else {
        res.send(`ID de usuário não fornecido.`);
    }
})

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})