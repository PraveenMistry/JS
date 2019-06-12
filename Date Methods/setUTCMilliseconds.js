// The setUTCMilliseconds() method sets the milliseconds (from 0 to 999), according to universal time

var d = new Date();
d.setUTCMilliseconds(192);
var n = d.getUTCMilliseconds();

console.log("getUTCMilliseconds",n); // 192