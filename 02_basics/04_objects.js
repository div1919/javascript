// const emailUser = new Object() //singleton object
const emailUser = {} //non-singleton object

emailUser.id = "123bac"
emailUser.name = "Divyanshu"
emailUser.isloggedIn = false

// console.log(emailUser);

const regularUser = {
    email: "abc@email.com",
    fullname: {
        userfullname: {
            firstname: "Divyanshu",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1 , obj2} //it stores object into object
// const obj3 = Object.assign({} , obj1, obj2)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "div@gmail.com"
    },
    {
        id: 2,
        email: "div1@gmail.com"
    },
    {
        id: 3,
        email: "div2@gmail.com"   
    }
]

users[1].email
console.log(emailUser);

console.log(Object.keys(emailUser));
console.log(Object.values(emailUser)); //it returns as array
console.log(Object.entries(emailUser));

console.log(emailUser.hasOwnProperty('isloggedoff')); //check whether it is available or not
