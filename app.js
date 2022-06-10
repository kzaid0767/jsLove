/*let juma = 'k';
const b = { a: 1, b: 3, 6: 7, juma: [7, 8, 9], couple: { dad: 67, mom: 66 } }

const gameBord = [
    [4, 32, 8, 4],
    [64, 8, 32, 4],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]
let gameScore = 0;
for (let index = 0; index < gameBord.length; index++) {
    for (let j = 0; j < gameBord[index].length; j++) {
        gameScore += gameBord[index][j]
        console.log(gameScore, j)
    }

}

alert(gameScore)*/
const rightGuess = Math.floor(Math.random() * 11)
//1console.log(rightGuess)

let userGuess;

function checkGuess() {

}
const Dice = () => Math.floor(Math.random() * 6 + 1)

// while (true) {
//     if (userGuess === rightGuess) break
//     userGuess = prompt(`Guess a number from 0 to 10`)
//     userGuess = parseInt(userGuess)
// }

function divi(a, b = 1) {
    return a / b
}
// console.log(divi(4))

//Check if password is valid given
// no spaces and username cannot be part of password
function isValidPassword(username, password) {
    let partof = password.indexOf(username)
    let spaceof = password.indexOf(' ')
    console.log(partof, spaceof)
    if ((password.length >= 8) && (partof == -1) && (spaceof === -1)) {
        return true
    }
    return false
}

// console.log(isValidPassword('dogLuvr', 'dogLuvr123!'))

function avg(arr) {
    let sum = 0
    for (const member of arr) {
        sum += member
    }
    return sum / arr.length
}

// console.log(avg([75, 76, 80, 95, 100]))

//Checks if string is Pangram
function isPangram(string) {
    let checkArr = []
    string = string.toLowerCase()
    for (const letter of string) {
        if (!checkArr.includes(letter) && (letter !== ' ')) {
            checkArr.push(letter)
        }
    }
    return checkArr.length === 26 ? true : false
}

// console.log(isPangram('The five boxing wizards jump quicly'))
//Higher Order Functions

//Return a random card suit and value
function getCard() {
    let num = [2, 3, 4, 5, 6, 7, 9, 10, 'J', 'Q', 'K', 'A']
    let type = ['clubs', 'spades', 'hearts', 'diamonds']
    let number = Math.floor(Math.random() * num.length)
    let typeNumber = Math.floor(Math.random() * type.length)
    let card = {
        value: num[number],
        suite: type[typeNumber]
    }
    return card

}

// console.log(getCard())

function callThreeTime(func) {
    func()
    func()
    func()
}

function laugh() {
    console.log(`Ha hahaha`)
}

callThreeTime(laugh)