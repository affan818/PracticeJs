function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (val) {
      this._email = val;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this._password + "abc";
    },
    set: function (val) {
      this._password = val;
    },
  });
}
const sahil = new User("sahil@fb.com", 4569);

console.log(sahil.email);
console.log(sahil.password);
