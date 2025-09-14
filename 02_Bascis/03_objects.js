// singleton 
// object literal

const mySym = Symbol("key1")

const JsUser = {
    name : "hitesh",
    "full name" : "Hitesh Chaudhary",
    [mySym] : "myKey1",
    age : 18,
    location :"jaipur",
    email: "hitesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Satuday"]

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

JsUser.email = "hitest@chagpt.com"
// Object.freeze(JsUser) // doesnt let futher code cahnge this
JsUser.email = "devrajprivate2467@gmaail.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());