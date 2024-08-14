const marvelHeroes = ["Thor", "Deadpool", "Iron-Man"]
const dcHeroes = ["Superman", "Flash", "BatMan"]

// marvelHeroes.push(dcHeroes) //it pushes array inside array
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);

// const heros = marvelHeroes.concat(dcHeroes) //concat -> combines two or more array and give a new array
// console.log(heros);

const allHeroes = [...marvelHeroes, ...dcHeroes]
console.log(allHeroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const usable_another_array = another_array.flat(Infinity) //flat -> returns a single array from all sub-arrays
console.log(usable_another_array);

console.log(Array.isArray("Divyanshu"));
console.log(Array.from("Divyanshu")); //from -> converts into array
console.log(Array.from({name: "Divyanshu"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of -> it converts variable into array
