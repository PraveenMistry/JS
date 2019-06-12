// returns the year (four digits for dates between year 1000 and 9999) of the specified date, according to universal time

var d = new Date();
var n = d.getUTCFullYear();



console.log("getUTCFullYear",n); // 2019