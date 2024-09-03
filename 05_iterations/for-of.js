// for of

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);   
// }

// const greetings = "Hello Bro"
// for (const greet of greetings) {
//     console.log(`Each Char is ${greet}`);
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United States")
map.set('UK', "United Kingdom")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-' , value);
}

const myobject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myobject) {  // we cannot iterate object from this method same as map
//     console.log(key, ':-' , value);
// }

