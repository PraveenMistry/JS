/*
Loose equals (==) v/s Strict equals (===)
*/

/*
Misconception: 
	== checks values for equals
	=== checks both values and types for equality

Correct Discription:
	== Allow coercion in the equality comparision
	=== Disallow coercion
*/

// comparing 

// A) String to Number

var a = 42;
var b = "42";
a==b; 	// true 
a===b; 	// false

/*
RULES:

1) if type(x) is number and type(y) is string,
	return the result of the comparision 
	x==ToNumber(y)

2) if type(x) is string and type(y) is number,
	return the result of the comparision 
	ToNumber(x)==y

*/



// B) Anything to Boolean (BIGGEST Gotchas)

var a="42";
var b=true;
a==b; // false

//NOTE: "42" is a truthy value, so how come its not == loose equal to true?

/*
RULES:

1) if type(x) is Boolean, 
	return the result of the comparison 
	ToNUmber(x) == y

2) if type(y) is Boolean, 
	return the result of the comparison 
	x == ToNUmber(y)

Case 2) Type(y) is Boolean 
	toNumber of b => Number(b)
				  => Number(true) => 1 (result)

	1=="42" // false 

*/


// C) Null to Undefined

/*
RULES:
loose equality :
	if x in null and y in undefined
	return null
*/

var a=null;
var b;

a==b; 		// true
a==null;	// true
b==null;	// true

a=="" 		// false
b=="" 		// false

var a = doSomething();

if(a==null){}


// D) Objects to nonObjects

/*
RULES:

1) if type(x) is either string or number and type(y) is object 
	return the result of the comparison x==toPrimitive(y)

2)  if type(x) is object and type(y) is either string or number
	return the result of the comparison toPrimitive(x)==y


NOTE: Not Boolean
*/

// EX 1)
var a=42;
var b=[42];
a==b; // true

// EX 2)
"42" == 42 // true

// EX 3)
var a="abc";
var a=Object(a);  // same as new string(a);

a===b; 	// false
a==b; 	// true


/*
Cases)

// EX 1)

var a=null;
var b=Object(a);
a==b; // false

// EX 2)
var c = undefined;
var d = Object(c);
c==d; // false

// EX 3)
var e=NaN;
var f=Object(e);
e==f; // false


*/
