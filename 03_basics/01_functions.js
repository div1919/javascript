// function sayMyname(){
//     console.log("D");
//     console.log("I");
//     console.log("V");
// }

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);    
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2;
//    return result;
   return number1 + number2;
}

const result = addTwoNumbers(3,4) 
// console.log("Result =",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please Enter a username.");
        return
    }
    
    return `${username} just logged In`
}

// console.log(loginUserMessage("Div"));

function calculateCartPrice(val1, val2, ...num1){ // ... => rest operator -> returns all argumnets in array
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 500));

const user = {
    username: "Sonu",
    price: 500
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);    
}

// handleObject(user)

handleObject({
    username: "Sam",
    price: 200
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return  getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 800]));
