const User = {
  _email: "affan@fb.com",
  _password: 1234,

  get email() {
    return this._email.toUpperCase();
  },
  set email(val) {
    this._email = val;
  },
};

const arhan = Object.create(User);
console.log(arhan.email);
