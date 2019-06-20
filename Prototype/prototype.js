// Prototype

function Person(){

}

//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin" ;
Person.prototype.age = 26;
Person.prototype.sayName = function(){
	console.log(this.name);
}

//Create an object using the Person constructor function
var person1 = new Person();

//Access the name property using the person object
console.log(person1.name);

var person2 = new Person();
//Access the name property using the person2 object
console.log(person2.name)// Output: Ashwin

person1.name = "Anil"
console.log(person1.name)//Output: Anil
console.log(person2.name)//Output: Ashwin