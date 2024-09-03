// for In

const programming = {
    js : 'Javascript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'Swift by apple'
}

// for (const key in programming) {
//     console.log(`${key} is shortcut for ${programming[key]}`); 
// }

const programmingArr = ["js", "py", "cpp", "rb"]

for (const key in programmingArr) {
    console.log(programmingArr[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('US', "United States")
// map.set('UK', "United Kingdom")

// for (const key in map) {  // it is not iteratable this way
//     console.log(key);
// }

