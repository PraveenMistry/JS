// whether a value is an illegal number

console.log("isNaN",isNaN(123)); //false
console.log("isNaN",isNaN(-1.23)); //false
console.log("isNaN",isNaN(5-2)); //false
console.log("isNaN",isNaN(0)); //false
console.log("isNaN",isNaN('123')); //false
console.log("isNaN",isNaN('Hello')); //true
console.log("isNaN",isNaN('2005/12/12')); //true
console.log("isNaN",isNaN('')); //false
console.log("isNaN",isNaN(true)); //false
console.log("isNaN",isNaN(undefined)); //true
console.log("isNaN",isNaN('NaN')); //true
console.log("isNaN",isNaN(NaN)); //true
console.log("isNaN",isNaN(0 / 0)); //true