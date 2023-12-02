const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
  //    console.log('Extensions',key,':',myObject[key])
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  //    console.log(programming[key])
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

// for (const [key] of map) {
//    console.log(map[key])
// } // not itreable in map

// for map we use only for of loop 
// for (const [key,value] of map) {
//     console.log(key,value)
//  }