// returns the day of the month (from 1 to 31) of the date object, according to universal time

var d = new Date();
var n = d.getUTCDate();

console.log("getUTCDate",n); // 9