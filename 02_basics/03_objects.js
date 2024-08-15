// singleton
// object.create

// object literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "Div",  // in this name is stored as string
    "full name": "Divyanshu Kumar",
    [mySym] : "myKey1",
    age: 22,
    location: "Delhi",
    email: "div@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(JsUser."full name"); //we can't access it like this it is not allowed
// console.log(JsUser[mySym]);

JsUser.email = "div@google.com"
// Object.freeze(JsUser) //freeze -> freezes the whole object
JsUser.email = "div@amazon.com"

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User.");
}

console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}.`);
}

console.log(JsUser.greeting2());



