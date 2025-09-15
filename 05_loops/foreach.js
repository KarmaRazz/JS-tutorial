const coding = ['js', 'py', 'ruby', 'java'] 

coding.forEach( function (item) {
    console.log(item);
})

// coding.forEach( (items)=>{
//     console.log(items)
// }) // here we have used callback using arrow function in the call abck we dont nee dot write the function name just the syntax

// function printMe(itemss){
//     console.log(itemss)
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        language : 'Javascript',
        langfile: 'js'
    },
    {
        language : 'Java',
        langfile: 'java'
    },
    {
        language : 'python',
        langfile: 'py'
    },
]

myCoding.forEach((item)=>{
    console.log(item.language);
})