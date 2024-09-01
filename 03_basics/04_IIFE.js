// Immediately Invoked Function Expressions (IIFE)

(function code(){ //named IIFE
    console.log(`Database CONNECTED`); //we have to use semi-colon(;) to end the IIFE coz it didn't know when to stop if we use another IIFE in code
})();

// why we use IIFE => global scope ke variables se pollution hota h isiliye IIFE use krte h

// ()() => way to use IIFE

( (name) => { // un-named IIFE
    console.log(`Database CONNECTED TWO, ${name}`);
}) ('Div')

