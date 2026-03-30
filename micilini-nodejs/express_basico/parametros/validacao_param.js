const express = require('express');
const app = express();
const port = 3000;

app.get('/usuario/{:id}', (req, res) => {
    const id = req.params.id;

    // Verifica se o id é um número
    if (!id) {
        res.status(400).send('Um ID deve ser fornecido.');
    } else if (!/^\d+$/.test(id)) {
        return res.status(400).send('ID deve ser um valor numérico.');
    } else {
        res.send(`ID do Usuário: ${id}`);
    }
});

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}/`);
})