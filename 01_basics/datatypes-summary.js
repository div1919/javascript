/*
Two types of datatype
1) Primitive
2) Non-Primitive
*/

//Primitive -> call by value => gives a copy of datatype not the original one
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.2//number

const isLoggedIn = false //boolean
const outsideTemp = null // null
let userEmail; //undefined

const id = Symbol('123') 
const anotherid = Symbol('123') 

console.log(id === anotherid); //every symbol is unique that's why it is false

//const bigNumber = 1111111111110222222222303n

//Reference or Non-Primitive => gives the reference of original value
// Arrays, Objects, Functions

const heroes = ["Deadpool", "Wolverine", "Wanda"]; // array

let myObject = {
    name: "Div",
    age: 22,
}

const myFucntion = function(){
    console.log("Hello World!!");
    
}

console.log(typeof isLoggedIn);
