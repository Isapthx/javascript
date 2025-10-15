const readline = require('readline-sync')

let chances

console.log('Welcome to the Number Guessing Game!!!\n\n')

console.log(`I'm thinking a number between 1 and 100! \nSelect the difficulty level:\n\n 1. Easy(10 chances)\n 2. Medium(5 chances)\n 3. Hard(3 chances)`)


const choice = Number(readline.question('\nEnter your choice: '))

switch (choice) {
    case 1: 
        chances = 10 
        console.log('\nChosen level: Easy')
        break;
    case 2: 
        chances = 5
        console.log('Chosen level: Medium')
        break;
    case 3: 
        chances = 3
        console.log('Chosen level: Hard')
        break;
    default: 
        chances = 10;
}

console.log(`Let's start!!!\n`)

let num = getRandomIntInclusive(100, 1)
let end = false
const totalChances = chances

while(end == false) {
    let guess = readline.question(`Enter your guess: `)

    if(guess == num) {
        chances--;
        console.log(`\nParabéns, você ganhou!!! \nVocê acertou o número ${num} em ${totalChances - chances} tentativas!!!`)
        end = true
    } else {
        chances--;

        if(chances >= 1) {
            console.log(`\nVocê errou!!!`)
            if(guess < num) {
                console.log(`Número é maior que ${guess}.`)
            } else {
                console.log(`O número é menor que ${guess}.`)
            }
            console.log(`Tente novamente, você possui mais ${chances} chances.\n`)
        } else {
            console.log(`\nVocê perdeu!!! Acabaram suas chances, o número era ${num}`)
            end = true
        }
    }
}

function getRandomIntInclusive(max, min) {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1)) + min
}