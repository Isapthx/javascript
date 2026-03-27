const { dir } = require('console')
const path = require('path')

console.log(`A extensão do arquivo é '${path.extname('path.js')}'`)

const directory = path.dirname('\\gemini-project\\testes\\stdin.js')

console.log(`O caminho é '${directory}'`)