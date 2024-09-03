const coding = ["js", "ruby", "cpp", "python", "java"]

// coding.forEach( function (value) {
//     console.log(value);
// } )

// coding.forEach( (value) => {
//     console.log(value);   
// } )

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe) // give only reference not execute the function

// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName : "js"
    },

    {
        languageName: "python",
        languageFileName : "py"
    },

    {
        languageName: "C++",
        languageFileName : "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
