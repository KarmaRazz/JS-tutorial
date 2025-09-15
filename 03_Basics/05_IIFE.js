// Immedately Invoked Function Expression (IIFE)

//Its a named IIFE 
(function chai(){
    console.log(`DB Connected`)
})(); // here for iife we need to end with ; to move to write another funcction 

// () here we wrap the fucntion definition and second () we call the function 

// can also write the same in arrow function 
((name)=>{
    console.log(`DB Connected ${name}`)
})('hitesh')