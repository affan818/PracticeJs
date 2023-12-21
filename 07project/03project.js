const clock = document.getElementById("clock");


setInterval(function () {
  const date = new Date().toLocaleTimeString();
  clock.innerHTML = date;
}, 1000);
