const user ={  // between the {} this is our current context 
    username: "hitesh",
    price: 999,

    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`) // to get the current context we are using this
        console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "sam" // here we change the context 
// user.welcomeMessage()

// function chai(){
//     console.log(this);
// }

// chai()

// const chai = () =>{
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// const addTwo = (num1, num2)=>{ //when used {} we need to retrn and this is explicit return
//     return num1 + num2
// }

// console.log(addTwo(3,4))

// const addTwo = (num1, num2)=> (num1 + num2) // this si implicit return same as the main arro function, when used () we dont need to use return

// console.log(addTwo(3,4))


const addTwo = (num1, num2) =>({username:num1})

console.log(addTwo(3,4))