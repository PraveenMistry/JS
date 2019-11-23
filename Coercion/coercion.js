// Converting a value from one type to another is offen called "type casting", when done explicitly and "coercion" 
// so implicity coercion vs explicity coerion

// Explicity: 
// 1) String <--> Number

var a =42;
var b =String(a);
console.log(a,"::",b); // 42 :: "42"

var c = "3.14";
var d = Number(c);
console.log(c,"::",d); // "3.14" :: 3.14


//ALSO

var a =42;
var b =a.toString();
console.log(a,"::",b); // 42 :: "42"

unary +) 

	var c = "3.14";
	var d = +c;
	console.log(c,"::",d); // "3.14" :: 3.14

	// +c unary +; instead od performing mathematic addition or string concatenation explicity coercion its operand (c) to a number value.

	var c = "3.14";
	var d = 5+ +c;
	console.log(d); // 8.14

unary -) 

var a = "3.14";
-a; // -3.14
--a; // -2.14



// 2) Date to Number
var d = new Date();
+d
// OR
var timestamp = + new Date();
// OR
var timestamp = new Date().getTime();
// OR
Date.now();


**) The Curious case of the ~
~42; // -43
~~42; //42


// Using ~ with indexOf()

var a = "Hello world";
~a.indexOf("lo"); // -4

// Truncation bits: ~ ~
~~49.6; // 49

// Unreasonable behavior => Parsing non-string

parseInt(Infinity,19); 	// 18
parseInt(0.000008); 	// 0 (0 from 0.000008)
parseInt(0.0000008); 	// 8 (8 from 8E-7)
parseInt(false,16); 	// 250 (FA from false)
parseInt(parseInt,16); 	// 15 (F from function)
parseInt("0x10"); 		// 16 
parseInt("103",2); 		// 2

// Implicity : * --> Boolean

var a =42;
var b ="abc";
var c;
var d=null;

if(a){console.log('if')} // if
while(c){console.log('while')} // infinity loop 
c=d?a:b; 				// "abc"
if((a&&d) || c){console.log(yep)} // yep


// Operators (|| nd &&)

var a= 42;
var b= "abc";
var c=null;

a||b; // 42
a&&b; //"abc"

c||b; // "abc"
c&&b; // null

// >>  Explain both || nd && operators perform a boolean test on the first operand (a or c).
	// if the operand is not already boolean a normal ToBoolean coercion occurs, so that the test can be perform

// A) for || => if the test is true, result in value of first operand else second 
// B) for && => if the test is true, result in value of second operand else first 

// HELPFUL USAGE:

function foo(a,b){
	a=a||"hello";
	b=b||"world";
	return a+' '+b;
}

foo(); // hello world
foo("Praveen","Suthar") // Praveen Suthar












