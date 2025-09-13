let score = "33abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score); // this will conver the the score data type from string to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc => NaN(not a Number)"
// true => 1; flase => 0

let isLoggedIn = 1

let booleanIsLoggedIn=Boolean(isLoggedIn)

// 1 => true; 0=> false
// "" => false
//"hitesth" => true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof(stringNumber));

