const express = require('express');
const app = express();
const port = 8080;

const authUser = function (req, res, next) {
    req.authUser = true;

    if (req.authUser) {
        console.log('Usuário Autenticado');
        next();
    } else {
        console.log('Usuário não Autenticado')
        next();
    }
}

app.use(authUser);

app.get('/', (req, res) => {
    res.send('Meu primeiro servidor com Express =D');
})

app.get('/pagina-exemplo', (req, res) => {
    res.send('Esta é a página de exemplo.');
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})
