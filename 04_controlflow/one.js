// if statement

// if(consdition){

// }

// operator (<, >, <=, >=,==,!=, ===-> this also checcks the datatype)

// const score = 200;

// if (score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }


const balance = 1000

// if (balance > 500) console.log("test"),
// console.log("test2"); // fucking immature code

// if (balance < 500){
//     console.log("less than");
// } else if( balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitcard ){
    console.log("aalow to shop")
}

if (loggedInFromGoogle || loggedInfromEmail){
    console.log("User logged in")
}

// Nullish Coalesing Operator (??): null undefined

// let val1; // this is made to ignore null and undefined and when there are value it will get the first value
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

console.log(val1);

//--------Terniary Operator

// consition ? true : flase

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")
