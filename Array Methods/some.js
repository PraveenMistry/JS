// The some() method checks if any of the elements in an array pass a test

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log("some",ages.some(checkAdult)); // true