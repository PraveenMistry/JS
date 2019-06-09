// The find() method returns the value of the first element in an array that pass a test (provided as a function).


var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

console.log("finding",ages.find(checkAdult));
