// returns the hour (from 0 to 23) of the specified date and time, according to universal time.

var d = new Date();
var n = d.getUTCHours();

console.log("getUTCHours",n); // 15