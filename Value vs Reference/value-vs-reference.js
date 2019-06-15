Ex 1)
console.log([10] === [10]); // false

Ex 2)
var oldArray = [];
var object = {};
object.newArray = oldArray;
oldArray.push(10);
console.log(object.newArray === oldArray); // true

// WHY ???

/*
 In JavaScript we have types that are copied by value and types copied by reference. These are
	Primitives (copied by value)
		null
		undefined
		Number
		String
		Boolean

	Objects (copied by reference)
		Object
	 	Array
	 	Function 
*/

// Primitives (When we assign primitives to the variable, we copy the value)

	var a = 5;
	var b = a;
	a = 10;
	console.log(a); // 10
	console.log(b); // 5

	// this is also true for string, boolean, null, undefined 

// Objects (When we assign Objects (non-primitives) to the variable, we copy them by reference)


var a = {};
var b = a;
a.a = 1;
console.log(a); // {a: 1}
console.log(b); // {a: 1}