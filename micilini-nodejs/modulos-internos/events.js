const EVENT_EMITTER = require('events');

const eventEmitter = new EVENT_EMITTER();

eventEmitter.on('runner', function pergunta() {
    console.log('Você já viu o filme do Blade Runner 2044?');
})

eventEmitter.emit('runner');

console.log('\n')

eventEmitter.on('eventoComArgs', (arg1, arg2) => {
    console.log(`Evento personalizado com argumentos!!!! \nOs argumentos são ${arg1} e ${arg2}.`);
})


eventEmitter.emit('eventoComArgs', 'Isaac', 'Emanuel');

eventEmitter.once('once', () => {
    console.log('Este ouvinte será acionado apenas uma vez!')
})

eventEmitter.emit('once')