// The toLocaleDateString() method converts the date (not the time) of a Date object into a readable string, using locale conventions

var d = new Date();
var n = d.toLocaleDateString();

console.log("toLocaleDateString",n); // "09/06/2019"