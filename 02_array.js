const bollyWood = ["salman", "sharukh", "amir"];
const hollyWood = ["Tom","DiCaprio","VinDiesel"];


// push method add the element at the and of the array and return the new lenght of an array
// bollyWood.push(hollyWood);

// console.log(bollyWood);
// console.log(bollyWood[3][0]);

// concat method add the all elements af array and returns a new array 

// const allHeros = bollyWood.concat(hollyWood)

// console.log(allHeros)

// spread operator 

const allHeros = [...bollyWood,...hollyWood]
// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],[7],[8,[9,10]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)


//isArray method check its array or not 

console.log(Array.isArray("affan"))
console.log(Array.from("affan"))

//they provide empty array bcoz it dontknow whict element to convert array
console.log(Array.from({name:"affan ahmad"}))

let score1 = 50
let score2 = 100
let score3 = 300

console.log(Array.of(score1,score2,score3))


