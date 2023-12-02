const myNums = [1, 2, 3, 4, 5];

// const myTotal = myNums.reduce ( (acc,curval) => {
//     let a = acc + curval
//     console.log(`${acc} and ${curval} = ${a}`)
//     return a
// },0)

// const myTotal = myNums.reduce((acc, curval) => acc + curval, 0)

// console.log(myTotal)

const shoppingCart = [
  {
    itemName: "js course",
    price: '2999',
  },
  {
    itemName: "py course",
    price: '999',
  },
  {
    itemName: "mobile dev course",
    price: '5999',
  },
  {
    itemName: "data science course",
    price: '12999',
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
return acc + +item.price // change data type if value in string
}, 0);

console.log(totalPrice);
