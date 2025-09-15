// for of was not working for object so we will use for in


const myObject = {
    js:'Javascript',
    cpp: 'c++',
    rb:'ruby',
    swift:'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(programming[key])
}