let a = 300 // here a is in global scope so value of a outside any {} will be 300

if(true){          // the scope is till the {} here from line 3 to 7
    let a = 10;  // since a nd b are let and const it limited to the scope only 
    const b = 20;
    // var c = 30;
}

console.log(a);
// console.log(b);
// console.log(c); 

function one(){
    const username = "hitesh"

    function two(){
        const website = " youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}

one()


if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);

//+++++++++++++++++++++ Intersting ++++++++++++++++++
addOne(5)
function addOne(num){ // int this way of function if we put the declaration above the function it will still work
    return num + 1
}



// addTwo(5)
const addTwo = function(num){ // this function is an expression so when i put the decalration above this expressionit will throw me an error 
    return num + 2
}
 addTwo(5)
