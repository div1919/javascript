const myNums = [1, 2, 3]


// const myTotal = myNums.reduce( function (acc, curr){
//     console.log(`Acculumator = ${acc} and current value = ${curr}`);
//     return acc + curr
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
console.log(myTotal);

const shoppingCart = [
    {
        itemname : "Js Course",
        price : 299,
    },

    {
        itemname : "python Course",
        price : 999
    },

    {
        itemname : "C++ Course",
        price : 1999
    },

    {
        itemname : "DSA",
        price : 3999
    },
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(total);