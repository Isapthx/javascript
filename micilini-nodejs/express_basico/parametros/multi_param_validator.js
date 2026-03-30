const express = require('express');
const { param, query, validationResult } = require('express-validator');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuario/:id',
    param('id').isInt().withMessage('ID deve ser um número inteiro.'),
    query('email').isEmail().withMessage('E-mail inválido.'),
    (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const id = req.params.id;
        const email = req.query.email;

        res.send(`ID do Usuário: ${id} ; E-mail: ${email}`);
    }
)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
})