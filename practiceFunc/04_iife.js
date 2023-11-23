// immediately invoke function Expression (IIFE)

(function iife() {
  console.log("IIFE");
})();

((name) => {
    console.log(`DB connected ${name}`)
})('affan')