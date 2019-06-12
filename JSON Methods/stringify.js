// converts JavaScript objects into strings

var obj = { "name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);
console.log("stringify",myJSON); // "{"name":"John","age":30,"city":"New York"}"