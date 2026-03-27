const fs = require('fs');
const path = require('path');

const diretorio = 'C:\\Users\\Windows Lite BR\\Documents\\Estudos\\javascript\\gemini-project\\testes\\pasta-fs'
const arquivo = 'novo-arquivo.txt'
const pathArquivo = path.join(diretorio, arquivo);

// Criando diretório (caso já não exista):

if (!fs.existsSync(diretorio)) {
    fs.mkdir(diretorio, (err) => {
    if (err) {
        console.log('Erro ao criar o diretório: ', err);
        return;
    } 
})
}

// opção assíncrona para escrever arquivo:

// fs.writeFile('novo-arquivo.txt', 'Conteúdo que foi escrito no arquivo!!!', 'utf-8', (err) => {
//     if (err) {
//         console.error('Ocorreu um erro na escrita: ' + err);
//         return;
//     } else {
//         console.log('O arquivo foi escrito com sucesso!!!\n\n');
//     }
// })

// opção síncrona para escrever arquivo:

try {
    const texto = "'Texto escrito no arquivo novo que foi criado pela função writeFile'"
    
    console.log('\nEscrevendo arquivo na pasta.....\n');
    fs.writeFileSync(pathArquivo, texto, 'utf8');
    console.log('Conteúdo escrito com sucesso!!!\n');
} catch (error) {
    console.log('Erro ao escrever no arquivo: ', error);
}

// Lendo diretório:

fs.readdir(diretorio, (err, files) => {
    if (err) {
        console.log('Lendo conteúdo do diretório................');
        console.error('Erro ao ler diretório', err);
        return;
    }
    console.log('Lendo conteúdo do diretório................');
    console.log('Arquivos do diretório criado: ', files, '\n');
})

// opção assíncrona para ler arquivo:

// fs.readFile('novo-arquivo.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.error('Ocorreu um erro durante a abertura do arquivo: ' );
//         return;
//     } else {
//         console.log('Lendo arquivo.............\n')
//         console.log('Conteúdo do Arquivo: ' + data);
//     }
// })

// opção síncrona para ler arquivo:

try {
    console.log('Lendo arquivo da pasta................');
    const conteudo = fs.readFileSync(pathArquivo, 'utf8');
    console.log('Conteúdo do arquivo: ', conteudo, '\n');
} catch (error) {
    console.log('Erro ao ler o arquivo: ', error);
}

// Remover arquivo:

fs.unlink(pathArquivo, (err) => {
    if (err) {
        console.log('Apagando arquivo..........');
        console.error('Erro durante a remoção do arquivo: ', err);
        return;
    } else {
        console.log('Apagando arquivo......');
        console.log('Arquivo removido com sucesso!\n');
    }
})

// Remover diretório:

/*  o segundo parâmetro diz se a remoção será recursiva (true) ou não (false)
    caso o parâmetro estiver setado como true, ele irá remover o diretório e todos os seus conteúdos de forma recursiva
*/
fs.rm(diretorio, {recursive: true}, (err) => {
    if (err) {
        console.log('Removendo diretório..............\n');
        console.log('Erro ao remover diretório: ', err);
    } else {
        console.log('Removendo diretório..............');
        console.log('Diretório removido com sucesso!')
    }
})

// renomear um arquivo ou diretório: fs.rename()
// copiar um arquivo para outro: fs.copyFile()
// fs.watch(): é um método bastante similar ao módulo events, onde permite que você assista ás mudanças em arquivos ou diretórios.
// fs.existsSync(): é um método usado para verificar se um arquivo ou diretório existe de forma síncrona.
// fs.promises.access(): é um método usado para verificar se um arquivo ou diretório existe de forma assíncrona.