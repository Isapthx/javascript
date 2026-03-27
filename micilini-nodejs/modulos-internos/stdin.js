console.log('Testando o método stdin:\n\n')

console.log('Digite algo: ')

process.stdin.on('data', (dados) => {
    console.log(`\nVocê digitou: ${dados}`);
    process.stdin.pause();    
})
