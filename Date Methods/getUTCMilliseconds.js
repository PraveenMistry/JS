// returns the milliseconds (from 0 to 999) of the specified date and time, according to universal time

var d = new Date();
var n = d.getUTCMilliseconds();

console.log("getUTCMilliseconds",n); // 14