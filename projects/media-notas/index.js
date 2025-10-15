const rl = require('readline-sync')

const nomeAluno = rl.question('Digite o nome do aluno: ')

const primeiraNota = parseFloat(rl.question('\nDigite a primeira nota: '))
const segundaNota = parseFloat(rl.question('\nDigite a segunda nota: '))
const terceiraNota = parseFloat(rl.question('\nDigite a terceira nota: '))
const quartaNota = parseFloat(rl.question('\nDigite a quarta nota: '))
const quintaNota = parseFloat(rl.question('\nDigite a quinta nota: '))

const media = (primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota) / 5;

if(media >= 6) {
    console.log(`\n${nomeAluno} está aprovado(a). Sua média é ${media}.`)
} else if (media >= 4 ) {
    console.log(`${nomeAluno} está apto(a) para fazer a AVF. Sua média é ${media}`)
} else {
    console.log(`${nomeAluno} está reprovado(a). Sua média é ${media}`)
}
