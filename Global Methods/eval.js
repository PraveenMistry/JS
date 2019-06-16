// evaluates or executes an argument

var x = 10;
var y = 20;
var a = eval("x * y");
var b = eval("2 + 2");
var c = eval("x + 17");

console.log("a",a); // 200
console.log("b",b); // 4
console.log("c",c); // 27

var res = a + b + c;

console.log("eval",res); // 231