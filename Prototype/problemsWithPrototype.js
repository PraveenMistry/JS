// Problems with the prototype
	// prototype having primitive value, other objects will not get affected but issue with prototypes when the prototype object contains a property of reference type

//Create an empty constructor function

function Person(){
}

//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.friends = ['Jadeja', 'Vijay'],//Arrays are of reference type in JavaScript
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create objects using the Person constructor function
var person1= new Person();
var person2 = new Person();

//Add a new element to the friends array
person1.friends.push("Amit");

console.log(person1.friends);// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends);// Output: "Jadeja, Vijay, Amit"