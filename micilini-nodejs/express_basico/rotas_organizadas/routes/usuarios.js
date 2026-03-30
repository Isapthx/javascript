const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
    res.send(`Usuário com ID ${req.params.id}`);
})

router.get('/email/:email', (req, res) => {
    res.send(`Usuário com email ${req.params.email}`);
})

module.exports = router;