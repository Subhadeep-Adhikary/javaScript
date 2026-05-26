const score=400

const balance = new Number(100)
console.log(balance.toString())
console.log(balance.toString().length)
console.log(balance.toFixed(1));

const numbers = 23.8966

console.log(numbers.toPrecision(3))

const hundreads = 1000000
console.log(hundreads.toLocaleString());



//++++++++++++++++++++++++++++Math+++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.98))
console.log(Math.max(4 , 3 , 9 , 2))
console.log(Math.min(4 , 3 , 9 , 2))

console.group(Math.random()*10+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1)))