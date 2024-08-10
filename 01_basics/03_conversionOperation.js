let score = "33abc" ; 

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber); 

// "33" => 33
// "33abc" => NaN
// true => 1

let isloggedIn = ""
console.log(typeof isloggedIn);

let numberToBool = Boolean(isloggedIn)
console.log(typeof numberToBool);
console.log(numberToBool);

// "" => false
// "div" => true

let someNumber = 19
console.log(typeof someNumber);

let numberToString = String(someNumber)
console.log(typeof numberToString);
console.log(numberToString);