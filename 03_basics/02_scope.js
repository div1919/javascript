// var c = 300
let a = 100

if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("In the condition:",a);    
}

// console.log("outside the condition:",a);
// console.log(b);
// console.log(c); // var is not good coz it doesn't get effected by scope

function one(){
    const username = "Divyanshu"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website); // gives error
    two()    
}

one()

if(true){
    const username = "Div"
    if(username == "Div"){
        const website = " reddit"
        console.log(username + website);        
    }
    // console.log(website);    //gives error
}

// console.log(username); // gives error

// +++++++++++++++++++++++++ interesting ++++++++++++++++++

function addOne(num){
    return num + 1
}

console.log(addOne(5));

// addTwo(5) // gives error => not accessible before initialization
const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));
