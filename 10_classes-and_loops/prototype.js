// let myName = "affan     "
// let mychannel = "zoop     "

// console.log(myName.trueLength);

let MyHeros = ["Abubakar", "Omer", "Ali"];

let heroPower = {
  Abubakar: "siddique",
  Omer: "insaf",
  Ali: "talwar",
  getAliPower: function () {
    console.log(`Hazrat Ali RZ has ${this.Ali}`);
  },
};

console.log(heroPower.getAliPower());

Object.prototype.affan = function () {
  console.log(`affan is present in all object`);
};

Array.prototype.ansar = function () {
  console.log(`${this} Wellcome to ansar family`);
};
let myarr = ["affan", "arhan", "imran"];

// heroPower.affan();
// myarr.ansar();

//inheritance

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
  time: "9:00 am",
};

const TeachingSupport = {
  isAvailable: false,
  name: "affan",
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport, // old method syantactic sugar for accessing the other object values
};

// console.log(TASupport.name); // access the teachingSupport values

Teacher.__proto__ = User;

// console.log(Teacher.email);

//  this is modernSyantacx modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

// console.log(TeachingSupport.time);

let another_userName = "maulana Tarique Jameel        ";

String.prototype.trueLength = function () {
  let trim = this.trim().length;
  return trim;
};

console.log(another_userName.trueLength());
console.log("Affan    ".trueLength());
