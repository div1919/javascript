const myArr = [1, 2, 3, 2, 4, 9]
const myHeroes = ["deadpool", "wolverine", "blade"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2[3]);
// console.log(myHeroes[0]);
// console.log(myArr.length);

//Array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()


// myArr.unshift(10) //unshift -> it push the element at the starting of array. It is not good coz we hav to shift every element
// myArr.shift() //shift -> removes first element from arr

// console.log(myArr.includes(0)); //includes -> it searches the given number in the array
// console.log(myArr.indexOf(9)); //gives the index of number

// const newArr = myArr.join() //join -> changes the type of array to string

// console.log(myArr);
// console.log(newArr);

// slice, splice
const newArr1 = new Array(myArr)
console.log("A ", myArr);

const newArr2 = myArr.slice(0, 3) //slice -> it copy from the array by index which we give. It doesn't change the original array
console.log(newArr2);
console.log("B ",myArr);

const newArr3 = myArr.splice(0,3) //splice -> it removes the value from original array and change it by  index we give
console.log(newArr3);
console.log("C ", myArr);


