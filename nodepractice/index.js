const counterObject = require('./myscript')

console.log(counterObject.getCounter())
counterObject.incrementCounter()
console.log(counterObject.getCounter())

const newObject = require('./myscript')
console.log(newObject.getCounter())