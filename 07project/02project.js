const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  if (height === "" || height <= 0 || isNaN(height)) {
    results.innerHTML = `the height is ${height} please add valid height`;
  } else if (weight === "" || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `the weight is ${weight} please add valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 19) {
      results.innerHTML = `<span style="color: blue;">Under Weighted ${bmi}</span>`;
    } else if (bmi >= 19 && bmi <= 25) {
      results.innerHTML = `<span style="color: green;">Normal Weight${bmi}</span>`;
    } else {
      results.innerHTML = `<span style="color: red;">Over Weight${bmi}</span>`;
    }
  }
});
