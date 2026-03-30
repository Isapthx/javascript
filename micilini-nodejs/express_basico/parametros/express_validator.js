const express = require('express');
const {param, validationResult} = require('express-validator');
const app = express();
const port = 3000;

// usa-se o express-validator como um middleware no app.get()
// seleciona-se o parâmetro para ser validado: param('id')
// seleciona-se o tipo de verificação, no caso, se é um número inteiro: isInt()
// e se falhar na verificação, o retorno será uma menssagem: withMessage()
app.get('/usuario/:id', param('id').isInt().withMessage('Id deve ser um número inteiro'), (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const id = req.params.id;
        res.send(`ID do usuário: ${id}`);
    }
)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})