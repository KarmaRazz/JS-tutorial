const name = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //String interpolation

const gameName = new String ('Hitesh');
console.log(gameName[0]);
console.log(gameName.__proto__); // to see the object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const trimString = "     Dev raj    ";
console.log(trimString);
console.log(trimString.trim());

const url = "https://hitest.com/hitesh%20raj"
console.log(url.replace('%20', '-'))
console.log(url.includes('dev'));

console.log(gameName.split('-'));