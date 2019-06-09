// The every() method checks if all elements in an array pass a test (provided as a function).

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

console.log("checking",ages.every(checkAdult));