const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'piadas.txt')

const piadas = fs.readFileSync(filePath, 'utf-8')

// console.log(piadas)

const linhas = piadas.split('\n')

sorteado = sortear(linhas.length)

console.log('======================')
console.log("Gerador de Piadas!!!")
console.log('======================\n')

console.log(linhas[sorteado])
console.log('\n')

function sortear(tamLinhas) {
    let min = 0
    let max = tamLinhas - 1

    return Math.floor(Math.random() * (max - min + 1)) + min;
}