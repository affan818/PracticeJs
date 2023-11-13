// there are two method to declare object

// const user = new Object({name:'affan'})
const user = {};
user.id = "1a2b3c";
user.name = "affan ahmad";
user.isLoggedin = false;
user.isMerried = true;

// console.log(user)
const sym = Symbol("A");
const userTwo = {
  id: "2abc3",
  [sym]: "A",
  isLoggedin: "false",
  fullName: {
    // indepth object or nested object
    userFullname: {
      first: "arhan",
      last: "ahmad",
    },
  },
};
// console.log(userTwo.fullName)
// console.log(userTwo.fullName.userFullname.first);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = {obj1,obj2,obj3}
// const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4)

const user$ = [
  {
    id: 1,
    email: "affan@gmail.com",
  },
  {
    id: 2,
    email: "arhan@google.com",
  },
  {
    id: 3,
    email: "imran@google.com",
  },
];
// console.log(user$[0])
// console.log(user$[1]['email'])

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// in hasOwnProperty method its check the Property is available or not and send output in boolean form

// console.log(user.hasOwnProperty("isLoggedin"));
// console.log(user.hasOwnProperty("class"));

const product = {
  productName: "Table",
  price: "1000",
  productBrand: "City Furniture",
};

// product.price

const { productBrand: brand } = product;
console.log(brand);
const {price:$} = product
console.log($)
