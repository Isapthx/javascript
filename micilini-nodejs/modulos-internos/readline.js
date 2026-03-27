const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Me diga seu nome: ', (nome) => {
    console.log(`Olá, ${nome}`);
    rl.close();
})

