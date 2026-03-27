const os = require('os');

console.log('Plataforma Atual: ', os.platform());
console.log('\n')
console.log('Arquitetura: ', os.arch());
console.log('\n')
console.log('Memória total(em bytes): ', os.totalmem());
console.log('\n')
console.log('Memória livre(em bytes): ', os.freemem());
console.log('\n')
console.log('Informações da CPU: ', os.cpus());
console.log('\n')
console.log('Usuário atual: ', os.userInfo());
console.log('\n')
console.log('Diretório temporário: ', os.tmpdir());