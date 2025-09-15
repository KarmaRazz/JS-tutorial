function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;

    return num1 + num2 
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(userName){
    return `${userName} just logged in`
}

const resutl = loginUserMessage("Dev")
console.log(resutl)