// type of value

var a;
console.log(typeof a); // undefined

var a="hello";
console.log(typeof a); // string

var a=42;
console.log(typeof a); // number

var a=true;
console.log(typeof a); // boolean

var a=null;
console.log(typeof a); // object  "Weird BUG"

var a=undefined;
console.log(typeof a); // undefined

var a=[1,2,3];
console.log(typeof a); // object

var a={b:"c"};
console.log(typeof a); // object

function foo(){
	return 42;
}
foo.bar = "hello";

console.log(typeof foo); 	// function
console.log(typeof foo());  // number
console.log(typeof foo.bar);// string

// ES6

console.log(typeof Symbol()); // symbol