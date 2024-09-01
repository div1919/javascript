const user = {
    username: "Div",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website.`);  
        console.log(this); // gives all the variables              
    }

}

// user.welcomeMessage()
// user.username = "Mayank"
// user.welcomeMessage()

// console.log(this); // gives empty object because there is no global variable defined

// function code(){
//     let username = "Div"
//     console.log(this); // gives random variables
//     // console.log(this.username) // gives undefined in functions only accesssible in objects
// }

// code()

// const code = function(){
//     let username = "Div"
//     // console.log(this); // gives random variables
//     console.log(this.username) // same as above just another way of declaraing function
// }

const code = () => {
    let username = "Div"
    console.log(this); // this time it gives empty object
    console.log(this.username) // same as above just another way of declaraing function
}

// code()

// arrow functions

// () => {}  // syntax of arrow

const addTwo = (num1, num2) => {  // basic arrow function
    return num1 + num2 
} 

// console.log(addTwo(3, 4));

// const addTwoVariables = (num1, num2) => num1 + num2  // implicit return
// const addTwoVariables = (num1, num2) => (num1 + num2)  // same as above 
const addTwoVariables = (num1, num2) => ({username: "Div."})  // u have to use parenthesis to  return an object

console.log(addTwoVariables(3, 4));