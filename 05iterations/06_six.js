const coding = ["js", "ruby", "java", "python", "cpp"];

// let code = coding.forEach((item)=> console.log(item))

// console.log(code) // forEach method do return a value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const nums = myNums.filter((n)=> n >= 5)
const num1 = [];
const nums = myNums.forEach((num) => {
  num1.push(num);
});

// console.log(num1)

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: "2009", edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let myBook = books.filter((book) => {
  return book.publish.toString() > 2000; //if value in string
});

// myBook = books.filter((e) => e.genre.toLocaleLowerCase() == "fiction");

myBook = books.filter(
  (book) =>
    book.genre.toLowerCase().toString() === "science" && book.publish > 2000
);

console.log(myBook);

// console.log(json);
// const arr = Array.from(json);
// console.log(arr);

// json.map((e) => {
//   console.log(e.image);
//   console.log(e.name);
//   console.log(e.description);
//   console.log(e.price);
// });
