const url = require('url');

const minhaURL = 'https://www.micilini.com/path?query=123#fragmento';
const parsedURL = url.parse(minhaURL, true);

console.log(parsedURL);

const minhaURLCustomizada = {
 protocol: 'https:',
 host: 'www.micilini.com',
 pathname: '/path',
 query: { query: '123' },
 hash: 'fragmento'
};

const formattedUrl = url.format(minhaURLCustomizada);
console.log(formattedUrl);


// função para testar se a url é válida
function isValidURL(url) {
 try {
 // Tenta analisar a URL
 const parsedUrl = new URL(url);
 return true;
 } catch (error) {
 // Se ocorrer um erro, a URL não é válida
 return false;
 }
}