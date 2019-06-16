// parses a string and returns a floating point number

console.log("parseFloat",parseFloat("10")); // 10
console.log("parseFloat",parseFloat("10.00")); // 10
console.log("parseFloat",parseFloat("10.33")); // 10.33
console.log("parseFloat",parseFloat("34 45 66")); // 34
console.log("parseFloat",parseFloat(" 60 ")); // 60
console.log("parseFloat",parseFloat("40 years")); // 40
console.log("parseFloat",parseFloat("He was 40")); // NaN
