//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toJSON());

// let myCreatedDate = new Date(2024, 7, 15)  //date
// let myCreatedDate = new Date(2024, 7, 15, 12, 10) //date and time 
let myCreatedDate = new Date("07-15-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() //gives the timestamp -> from the standard date it gives time into ms that we have to convert it into seconds

// console.log(myTimeStamp); 
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //ms to sec.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month starts with 0 by default so +1 to get the exact month
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})