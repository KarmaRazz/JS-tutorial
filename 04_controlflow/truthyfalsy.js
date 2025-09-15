const userEmail = "h@hitesh.ai" // this is a truthy vaue where we dont cmpare but we knw it truth
if(userEmail){
    console.log("Got the user Email")
}else{
    console.log("Dont have user email")
}

const userEmails = ""
if(userEmails){
    console.log("Got the user Email")
}else{
    console.log("Dont have user email")
}

// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN // except all these are the truthy vlaues

// some truthy values
// "0", 'false', " ", [], {},function(){}-> empty function 


// if (userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}