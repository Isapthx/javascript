const http = require('http');
const { hostname } = require('os');

const options = {
    hostname: 'www.example.com',
    port: 80,
    path: '/', 
    method: 'GET'
}

const req = http.request(options, (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    })

    res.on('end', () => {
        console.log('Resposta completa: ', data);
    })
})

req.on('error', (e) => {
    console.error('Problema com a solicitação: ', e.message);
})

req.end();