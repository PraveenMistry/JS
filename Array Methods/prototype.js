// The prototype constructor allows you to add new properties and methods to the Array() object.


EX 1) Add Method

Array.prototype.upperCase = function() {
  var i;
  for (i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.upperCase();


Ex 2) Add Propertiy (push an element)

Array.prototype.pushProperty = function(element) {
  this.push(element);
}; 

var sub = ["Algorithm", "Data Structure","Operating System", "html"]; 
sub.pushProperty("css");
console.log("pushProperty",sub); // ["Algorithm", "Data Structure", "Operating System", "html", "css"]