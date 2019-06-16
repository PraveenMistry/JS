//  determines whether a number is a finite, legal number

var a = isFinite(123);
var b = isFinite(-1.23);
var c = isFinite(5-2);
var d = isFinite(0);
var e = isFinite("123");
var f = isFinite("Hello");
var g = isFinite("2005/12/12");



console.log("a",a); // true
console.log("b",b); // true
console.log("c",c); // true
console.log("d",d); // true
console.log("e",e); // true
console.log("f",f); // false
console.log("g",g); // false


var res = a + b + c + d + e + f + g;


console.log("isFinite",res); // 5
