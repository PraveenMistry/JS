// EX 1) 

function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi(); // undefined and ReferenceError

/*
Within the function, we first declare the name variable with the var keyword. 
This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, 
until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, 
so it still holds the value of undefined.
Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. 
They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". 
When we try to access the variables before they are declared, JavaScript throws a ReferenceError.
*/


// EX 2)

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);  // 3 3 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1); // 0 1 2
} 


// EX 3)

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter(); // 20
shape.perimeter(); //  NaN

/*
Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! 
This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
There is no value radius on that object, which returns undefined.
*/



// EX 4)
+true;	 	// 1 
!"Lydia"; 	// false

/*
The unary plus tries to convert an operand to a number. true is 1, and false is 0.
The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.
*/


// EX 5)

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // Hello

/*
In JavaScript, all objects interact by reference when setting them equal to each other.
First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
When you change one object, you change all of them.
*/


// EX 6)

let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b); 	// true
console.log(a === b);	// false
console.log(b === c); 	// false

/*
console.log(new Number(3)); // Number {3}
*/



// EX 7)

class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.colorChange("orange"); // TypeError

/*
The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, 
and cannot be passed down to any children. Since freddie is a child, the function is not passed down, 
and not available on the freddie instance: a TypeError is thrown.
*/


// EX 8)

let greeting;
greetign = {};
console.log(greetign); // {}

/*
It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, 
the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).
In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.
*/


// EX 9)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person("Lydia", "Hallie");

Person.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

console.log(member.getFullName()); // TypeError

/*
You can't add properties to a constructor like you can with regular objects. 
If you want to add a feature to all objects at once, you have to use the prototype instead. So in this case,

Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

would have made member.getFullName() work. Why is this beneficial? Say that we added this method to the constructor itself. 
Maybe not every Person instance needed this method. This would waste a lot of memory space, since they would still have that property, 
which takes of memory space for each instance. Instead, if we only add it to the prototype, we just have it at one spot in memory, 
yet they all have access to it!
*/


// EX 10)

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

console.log(lydia); // Person {firstName: "Lydia", lastName: "Hallie"}
console.log(sarah); // undefined


/*
For sarah, we didn't use the new keyword. When using new, it refers to the new empty object we create. 
However, if you don't add new it refers to the global object!
We said that this.firstName equals "Sarah" and this.lastName equals "Smith". 
What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined.
*/


// EX 11)
//Q) What are the three phases of event propagation
// During the capturing phase, the event goes through the ancestor elements down to the target element. It then reaches the target element, and bubbling begins.


// EX 12)

function sum(a, b) {
  return a + b;
}

sum(1, "2"); // 12

/*
JavaScript is a dynamically typed language: we don't specify what types certain variables are. 
Values can automatically be converted into another type without you knowing, which is called implicit type coercion. 
Coercion is converting from one type into another.

In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. 
During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. 
We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".
*/


// EX 13)

let number = 0;
console.log(number++); // 0
console.log(++number); // 2
console.log(number); // 2

/*
The postfix unary operator ++:

Returns the value (this returns 0)
Increments the value (number is now 1)
The prefix unary operator ++:

Increments the value (number is now 2)
Returns the value (this returns 2)
*/


// EX 14)

function getPersonInfo(one, two, three) {
  console.log(one); // ["", " is ", " years old"] 
  console.log(two); // Lydia
  console.log(three); // 21
}

const person = "Lydia";
const age = 21;

getPersonInfo`${person} is ${age} years old`;

/*
If you use tagged template literals, the value of the first argument is always an array of the string values. 
The remaining arguments get the values of the passed expressions!
*/


// EX 15)

function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("You are an adult!");
  } else if (data == { age: 18 }) {
    console.log("You are still an adult.");
  } else {
    console.log(`Hmm.. You don't have an age I guess`);
  }
}

checkAge({ age: 18 }); // Hmm.. You don't have an age I guess

/*
When testing equality, primitives are compared by their value, while objects are compared by their reference. 
JavaScript checks if the objects have a reference to the same location in memory.
The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory 
than the object we used in order to check equality.
This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.
*/


// EX 16)

function getAge(...args) {
  console.log(typeof args); // object
}

getAge(21);


/*
The spread operator (...args.) returns an array with arguments. An array is an object, so typeof args returns "object"
*/


// EX 17)

function getAge() {
  "use strict";
  age = 21;
  console.log(age); // ReferenceError
}

getAge();

/*
With "use strict", you can make sure that you don't accidentally declare global variables. 
We never declared the variable age, and since we use "use strict", it will throw a reference error. 
If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.
*/


// EX 18)
const sum = eval("10*10+5"); // 105


// EX 19)
var num = 8;
var num = 10;

console.log(num); // 10

// EX 20)

const obj = { 1: "a", 2: "b", 3: "c" };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty("1");// true
obj.hasOwnProperty(1);  // true
set.has("1");  			// false
set.has(1);  			// true

/*
All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. 
This is why obj.hasOwnProperty('1') also returns true.
It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. 
It has the numeric type 1, set.has(1) returns true.
*/

// EX 21)

const obj = { a: "one", b: "two", a: "three" };
console.log(obj); 		// {a: "three", b: "two"}

/*
If you have two keys with the same name, the key will be replaced. 
It will still be in its first position, but with the last specified value.
*/

// EX 22)

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i); // 1 2 4
}


// EX 23)

String.prototype.giveLydiaPizza = () => {
  return "Just give Lydia pizza already!";
};

const name = "Lydia";

name.giveLydiaPizza(); // Just give Lydia pizza already!

/*
String is a built-in constructor, which we can add properties to. I just added a method to its prototype. 
Primitive strings are automatically converted into a string object, 
generated by the string prototype function. So, all strings (string objects) have access to that method!
*/


// EX 24)

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]); // 456

/*
Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
However, when we stringify an object, it becomes "[Object object]". So what we are saying here, is that a["Object object"] = 123. 
Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["Object object"] = 456.
Then, we log a[b], which is actually a["Object object"]. We just set that to 456, so it returns 456.
*/

console.log(a[{}]); // 456

// EX 25)

const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"));
const baz = () => console.log("Third");

bar();  
foo();  
baz(); 

// OUTPUT
/*
First
Third
Second
*/


// EX 26)

<div onclick="console.log('first div')">
  <div onclick="console.log('second div')">
    <button onclick="console.log('button')">
      Click!
    </button>
  </div>
</div>

// button

/*
The deepest nested element that caused the event is the target of the event. 
You can stop bubbling by event.stopPropagation
*/



// EX 27)

<div onclick="console.log('div')">
  <p onclick="console.log('p')">
    Click here!
  </p>
</div>


// p div

/*
If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. 
By default, event handlers are executed in the bubbling phase (unless you set useCapture to true).
It goes from the deepest nested element outwards.
*/



// EX 28)

const person = { name: "Lydia" };

function sayHi(age) {
  console.log(`${this.name} is ${age}`);
}

sayHi.call(person, 21); // Lydia is 21
sayHi.bind(person, 21); // function


/*
With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!
.bind. returns a copy of the function, but with a bound context! It is not executed immediately.
*/


// EX 29)

function sayHi() {
  return (() => 0)();
}

typeof sayHi(); // number

/*
The sayHi function returns the returned value of the immediately invoked function (IIFE). This function returned 0, which is type "number".
FYI: there are only 7 built-in types: null, undefined, boolean, number, string, object, and symbol. 
"function" is not a type, since functions are objects, it's of type "object".
*/


// EX 30) Which of these values are falsy

0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;

// ANS:  0, '', undefined

/*
There are only six falsy values:

undefined
null
NaN
0
'' (empty string)
false
Function constructors, like new Number and new Boolean are truthy.

*/


// EX 31) 
console.log(typeof typeof 1); // string

/*
typeof 1 returns "number". typeof "number" returns "string"
*/


// EX 32)

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers); // [1, 2, 3, empty × 7, 11]


/*
When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". 
These actually have the value of undefined, but you will see something like:
[1, 2, 3, 7 x empty, 11]
depending on where you run it (it's different for every browser, node, etc.)
*/


// EX 33)

(() => {
  let x, y;
  try {
    throw new Error();
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x);
  }
  console.log(x);
  console.log(y);
})();


/*
OUTPUT
1
undefined
2

The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.
Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.
Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.
*/



// EX 34)

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

// [1, 2, 0, 1, 2, 3]

/*
[1, 2] is our initial value. This is the value we start with, and the value of the very first acc. During the first round, acc is [1,2], and cur is [0, 1]. We concatenate them, which results in [1, 2, 0, 1].

Then, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3]



// EX 35)

!!null;
!!"";
!!1;

/*
OUTPUT

false 
false 
true


null is falsy. !null returns true. !true returns false.
"" is falsy. !"" returns true. !true returns false.
1 is truthy. !1 returns false. !false returns true.

*/


// EX 36) What does the setInterval method return in the browser

setInterval(() => console.log("Hi"), 1000); // hi(every 1000 mn)

// ANS:  It returns a unique id. This id can be used to clear that interval with the clearInterval() function


// EX 37) What does this return

[..."Lydia"];


/*
OUTPUT
["L", "y", "d", "i", "a"]

A string is an iterable. The spread operator maps every character of an iterable to one element.
*/
