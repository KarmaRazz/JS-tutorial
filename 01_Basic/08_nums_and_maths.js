const score = 400
// console.log(score)
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// //+++++++++++++++++++++++ Maths ++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); // it will only change neg to posi not vice versa
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2))// round of to upper value here 5 
// console.log(Math.floor(4.8)) // round of to the lower value here 4
// console.log(Math.min(4,5,6,7)) // consoless the minimu value
// console.log(Math.max(4, 5,3,8,9)) // gets the max value form this 

console.log(Math.random());// Randomly shoses the value from 0 to 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min)
