// To solve the problems with the prototype and the problems with the constructor, we can combine both the constructor and function.

/*
1. Problem with the constructor function: Every object has its own instance of the function
2. Problem with the prototype: Modifying a property using one object reflects the other object also
*/

//Define the object specific properties inside the constructor
function Human(name, age){
	this.name = name,
	this.age = age,
	this.friends = ["Jadeja", "Vijay"]
}

//Define the shared properties and methods using the prototype
Human.prototype.sayName = function(){
	console.log(this.name);
}

//Create two objects using the Human constructor function
var person1 = new Human("Virat", 31);
var person2 = new Human("Sachin", 40);

//Lets check if person1 and person2 have points to the same instance of the sayName function
console.log(person1.sayName === person2.sayName) // true

//Let's modify friends property and check
person1.friends.push("Amit");

console.log(person1.friends)// Output: "Jadeja, Vijay, Amit"
console.log(person2.friends)//Output: "Jadeja, Vijay"