// Stack (Primitive), Heap (non-Primitive)

let myYoutubeName = "Devraj Mandal"

let anotherName = myYoutubeName;
anotherName = "Karma";

console.log(myYoutubeName);
console.log(anotherName);


let userOne = {
    email : "dev@gmail.com",
    phone : 9814865955
}

let userTwo = userOne;

userTwo.email = "karma@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
