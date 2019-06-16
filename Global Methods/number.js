// converts the object argument to a number that represents the object's value

var x1 = true;
var x2 = false;
var x3 = new Date();
var x4 = "999";
var x5 = "999 888";

console.log("number",Number(x1)); // 1
console.log("number",Number(x2)); // 0
console.log("number",Number(x3)); // 1560621738626
console.log("number",Number(x4)); // 999
console.log("number",Number(x5)); // NaN