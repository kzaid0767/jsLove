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

function cry() {
    alert(`Bo ho ho ho ho`)
}

//callThreeTime(laugh)

function repeatNTime(funct, num) {
    for (let i = 0; i < num; i++) {
        funct()

    }
}

//repeatNTime(laugh, 5)

function randomCallFunc(func1, func2) {
    let a = Math.floor(Math.random() * 2)
    a ? func1() : func2()
}

// randomCallFunc(laugh, cry)

// Functions as return values

function makeBetweenFunc(min, max) {
    return function (val) {
        return val >= min && val <= max;
    }
}

const inAgeRange = makeBetweenFunc(18, 100)
//console.log(inAgeRange(17))

//Callback Funtions
// A function passed in to be called by an outer function
function yoYo() {
    alert(`Yo you go away`)
}

setTimeout(yoYo, 2000)

// or pass an anonymous callback function
setTimeout(function () {
    alert(`Using anonymous functions`)
}, 7000)

const btn = document.querySelector('button')
btn.addEventListener('click', cry)

//Array methods with callbacks
//forEach
const numbers = [20, 21, 22, 23, 24, 25, 26, 27]
// numbers.forEach(function (el) {
//     console.log(el ** 2)
// })

const Books = [
    {
        title: 'Men',
        authors: ['James', 'Musa'],
        rating: 4.35
    },
    {
        title: 'Meann',
        authors: ['Jumas', 'Musa'],
        rating: 1.35
    },
    {
        title: 'Mene',
        authors: ['James', 'Musapata'],
        rating: 4.15
    },
    {
        title: 'Mennee',
        authors: ['James', 'Musata'],
        rating: 2.15
    }
]

// Books.forEach(function (el) {
//     console.log(`${el.title}`)
// })
// Books.forEach(function (el, index) { //forEach can some index as a secong argument
//     console.log(`${index}: ${el.title}`)
// })

//map -- return and array/object based on some function without mutationg original array
const doubleRating = Books.map(function (el) {
    return el.rating * 2
})

const doubleRatingObject = Books.map(function (n) {
    return {
        value: n.rating,
        isEven: n.rating % 2 === 0
    }
})
// console.log(doubleRatingObject)

//Arrow functions
const cube = (x) => {
    return x ** 3
}

const istEven = (x) => {
    return x % 2 === 0 ? true : false
}

//Arrow functions implicit returns, no need to write return keyword

const quadRuple = x => x ** 4

const someDoubled = numbers.map(x => 2 * x)


//Array.find stops after finding the first one
const hata = numbers.find(num => num % 3 === 0)

const jata = Books.find(book => book.rating >= 4)
//console.log(jata.title)


//filter find elements in an arrya fitting some property and makes a new array of them
const yata = Books.filter(book => book.rating > 4)
//console.log(yata)

//some and every
const words = ['dot', 'dyt', 'det', 'dut', 'dat', 'diht']

const mana = words.every(word => word.length === 3)
console.log(mana)

const mmana = words.some(word => word.includes('o'))
console.log(mmana)

//sort taking callback so to sort numbers 
const prices = [400.50, 3000, 99.99, 35.99, 12.00]

const ascPrices = prices.sort((a, b) => a - b)
console.log(ascPrices)

//array.reduce takes array of values and reduce them to single value

const sumOfPrices = prices.reduce((accumulator, currentvalue) => accumulator + currentvalue)
//console.log(sumOfPrices)

const largestPrice = prices.reduce((a, c) => {
    return a > c ? a : c
})


const llargestPrice = prices.reduce((a, c) => {
    return Math.max(a, c)
})

//reduce with initial value
const gargestPrice = prices.reduce((a, c) => {
    return Math.max(a, c)
}, 4000)
console.log(gargestPrice)

const votes = ['y', 'n', 'n', 'n', 'y', 'n', 'n', 'n', 'n', 'n', 'n', 'y', 'y']

const results = votes.reduce((tally, val) => {
    if (tally[val]) {
        tally[val]++
    } else {
        tally[val] = 1
    }
    return tally
}, {})

// console.log(results)

//Spread Syntax
const Prices = [400.50, 3000, 99.99, 35.99, 12.00]
//console.log(Math.max(...Prices))
const baja = 'hahamamajaka'
const votesPrices = [...votes, ...Prices, 'justsomeelement', ...baja]
// console.log(votesPrices)

//Spread on objects
//Can only spread object with object
const feline = {
    legs: 4,
    family: 'Feline'
}

const canine = {
    family: 'Caninae',
    furry: true
}

const felineCaninae = { ...feline, ...canine }
// console.log(felineCaninae)

//arguments available in all functions (old approach, new version is rest)

//Rest
function sum(...nums) {         //nums will be an array of arguments
    return nums.reduce((a, c) => a + c)
}
// console.log(sum(1, 2, 3, 4, 5))

function fullName(first, last, ...titles) {     //rest params must be last and can be used with arrow functions

}

// Destructuring Arrays
const raceResults = [
    'me', 'shee', 'thee', 'we',
]
//assigning some value using raceResults data
const [fisrt, , , fourth] = raceResults
const [winner, , ...others] = raceResults

//Destructuring objects
const runner = {
    first: 'Fizza',
    last: 'Zaid',
    country: 'USA',
    title: 'First Borne'
}

const { first, last } = runner

//Make a value called nation based on the coutry
const { country: nation } = runner
const { country: place, ...other } = runner

//destructuring parameters
function print({ first }) {
    console.log(`The first name is ${first}`)
}

// print(runner)

// Objects Objects and more Objects
const reviews = [4.5, 5.6, 7.8, 9, 0.5]
const getStats = (arr) => {
    const big = Math.max(...arr);
    const small = Math.min(...arr);
    return {
        big,
        small
    }

}

const kilo = getStats(reviews)

//computed properties
const addProp = (obj, k, v) => {
    return {
        ...obj,
        [k]: v
    }
}

// console.log(addProp(kilo, 'jambo', 'gani'))

//Method in objects
const hisabu = {
    add: function (x, y) {
        return x + y
    },
    divide: function (x, y) {
        return x / y
    }
}

//shorter way of adding methods in objects without using function keyword
const sabu = {
    add(x, y) {
        return x + y
    },
    divide(x, y) {
        return x / y
    }
}

//Using the this keyword
const mtu = {
    first: 'Sharifa',
    last: 'Zaid',
    trait: 'Awesome',
    fullName() {
        const { first, last, trait } = this //destructing the properties from this object!!!
        console.log(`${first} ${last}`)
    }
}

mtu.fullName()

//For arrow functions, this refers to window

const annoyer = {
    phrases: ['hey', 'sure', 'wow', 'hah'],
    pickPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)]
    },
    start() {
        this.timerId = setInterval(() => (  //setInterreturns an 
            console.log(this.pickPhrase())
        ), 3000)
    },
    stop() {
        clearInterval(this.timerId)
        console.log('Nooo Moooore')
    }
}
//annoyer.start()

// **********************************
// WRITING EVERYTHING USING FUNCTIONS
// **********************************
function initializeDeck() {
    const deck = [];
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    for (let value of values.split(',')) {
        for (let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
}

function drawCard(deck, drawnCards) {
    const card = deck.pop();
    drawnCards.push(card);
    return card;
}

function drawMultiple(numCards, deck, drawnCards) {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
        cards.push(drawCard(deck, drawnCards));
    }
    return cards;
}

function shuffle(deck) {
    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--) {
        //pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));
        //swap
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


// We have to create a bunch of variables:
const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
// We have to pass a ton of arguments around:
const hand1 = drawMultiple(2, firstDeck, drawnCards);
const hand2 = drawMultiple(2, firstDeck, drawnCards);
const pokerHand = drawMultiple(5, firstDeck, drawnCards);





// **********************************
// USING AN OBJECT + METHODS INSTEAD:
// **********************************

const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initializeDeck() {
        const {
            suits,
            values,
            deck
        } = this;
        for (let value of values.split(',')) {
            for (let suit of suits) {
                deck.push({
                    value,
                    suit
                })
            }
        }
        // return deck;
    },
    drawCard() {
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards) {
        const cards = [];
        for (let i = 0; i < numCards; i++) {
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle() {
        const {
            deck //destructuring deck as its being passed
        } = this;
        // loop over array backwards
        for (let i = deck.length - 1; i > 0; i--) {
            //pick random index before current element
            let j = Math.floor(Math.random() * (i + 1));
            //swap
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    }
}

// Much cleaner!!
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);

