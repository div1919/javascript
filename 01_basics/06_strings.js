const name = "Div!!"
const repoCount = 4

// console.log(name + repoCount + " Value"); //outdated concept

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //string interpolation

const gameName = new String('Divyanshu-sonu-mayank')

console.log(gameName[0]); //access the keyword at 0th position
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 7) //substring -> return substring and don't take -ve start 
console.log(newString);

const anotherString = gameName.slice(-8,2) //slice -> it can take -ve value -9 = 0, -8 = 1
console.log(anotherString);

const newString1 = "     Div      "
console.log(newString1);
console.log(newString1.trim()); //trim -> remove spaces

const url = "https://google.com/hianime%20to"
console.log(url.replace('%20', '.')); //replace -> replace one value with another, first it take which value to replace and with which value it is been replaced

console.log(url.includes('hia'))

console.log(gameName.split('-')); //split -> it splits the string into array on the basis od given argument

