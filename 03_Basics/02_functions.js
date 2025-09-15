function calculateCartPrice(...num1){ // its a rest operator menaing we can return how much valure we want and it will be stored in an array 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username:"hitesh",
    price: 199,
}

function handleObjeect(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObjeect(user)
handleObjeect({
    username: "sam",
    price: "free"
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));