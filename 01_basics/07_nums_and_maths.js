const score = 500
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //fixed -> give the 2(n) decimal value

const otherNumber = 119.915191
console.log(otherNumber.toPrecision(4)); //use precision after 4(n) numbers

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //use comma in big numbers according to US system
console.log(hundreds.toLocaleString('en-IN')); //Indian system


