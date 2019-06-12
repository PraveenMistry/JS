// returns the time difference between UTC time and local time, in minutes

var d = new Date();
var n = d.getTimezoneOffset();

console.log("getTimezoneOffset",n); // -330