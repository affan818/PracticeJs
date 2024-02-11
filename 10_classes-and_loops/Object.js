function multiplyBy5(num) {
  return num * 5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.incr = () => {
  this.score++;
};

createUser.prototype.print = function () {
  console.log(`price is ${this.score}`);
};

const userOne = new createUser("affan", 22);
const usertwo = new createUser("arhan", 7);
// console.log(userOne.incr());
console.log(usertwo.print());
