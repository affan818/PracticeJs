const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task is Compelete");
    resolve();
  }, 1000);
});
promiseOne.then(function () {
  console.log("promises consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2");
    reject();
  }, 1000);
})
  .then(() => {
    console.log("completed");
  })
  .catch((error) => {
    console.error("not find");
  });

const promisesThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Affan", email: "adb@gmail.com" });
  }, 1000);
});
promisesThree.then(function (user) {
  console.log(user.username);
  console.log(user.email);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let err = true;
    if (!err) {
      resolve({ username: "Affan", email: "ansari818@ansar.com" });
    } else {
      reject("Error");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .catch((err) => {
    console.log("Affan ", err);
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve([1, 2, 3, 4, 5]);
    } else {
      reject("ERROR: JS Went Wrong");
    }
  }, 1000);
});

async function consumePromise() {
  try {
    const promise = await promiseFive;
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
}
consumePromise();

async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E: ", error);
  }
}
getUsers();

fetch("https:api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
