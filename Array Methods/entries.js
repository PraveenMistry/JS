// The entries() method returns an Array Iterator object with key/value pairs.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x =  fruits.entries();
console.log(x.next().value); //  [0, "Banana"]