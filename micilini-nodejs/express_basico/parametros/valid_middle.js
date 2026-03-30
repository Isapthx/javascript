const express = require('express');
const app = express();
const port = 3000;

const validParams = (req, res, next) => {
    const id = req.params.id;

    if (!id) {
        res.status(400).send('Um ID deve ser fornecido.');
    } if (/^\d+$/.test(id)) {
        next(); // id numérico validado, segue o jogo
    } else {
        res.status(400).send('ID deve ser um valor numérico.'); //400 - bad request, solicitação falhou por um erro do cliente
    }
}

app.get('/usuario/{:id}', validParams, (req, res) => {
    const id = req.params.id;

    res.send(`Id do usuário: ${id}`);
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/usuario`)
})