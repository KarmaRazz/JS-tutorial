// const tinderUser = new Object();// its a singletoon objects

const tinderUser={} // its not a singleton object 

tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Hitesh",
            lastName: "Chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 ={1:"a", 2:"b"} // target
const obj2= {3:"a",4:"b"}// source

// const obj3={obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2) // Object.assign helps to merge the target witht the ccoursce "Object.assign(target, source)"

const obj3 = {...obj1, ...obj2} // spread operator
console.log(obj3);

const users = [
    {
        id :1,
        email:"dev@gmail.com"
    },
       {
        id :2,
        email:"aalok@gmail.com"
    },
       {
        id :3,
        email:"sujata@gmail.com"
    },
       {
        id :4,
        email:"bablu@gmail.com"
    },
       {
        id :5,
        email:"chotu@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))// to check if the object contain the specicif  property(key)

const  course = {
    courseName : 'Js in Hindi',
    price: "999",
    courseInstructor : "hitesh"
}

const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name"  : "Hitesh",
//     "courseName": "Js in Hindi",
//     "p rice": "free"
// }

// [
//     {},
//     {},
//     {}
// ]