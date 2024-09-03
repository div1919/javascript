// if 

// const isUserLoggedIn = true
// const temperature = 41

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("Temperature is greater than 50");
// }
// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);    
// }

const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("Greater than 750");
// }
// else if(balance < 900){
//     console.log("Greater than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitcard){
    console.log("Allow to buy something");
}

if(loggedInfromEmail || loggedInfromGoogle){
    console.log("User Logged in");
}