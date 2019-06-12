// converts a Date object into a string, formatted as a JSON date

var d = new Date();
var n = d.toJSON();

console.log("toJSON",n); // "2019-06-09T16:27:05.979Z"