// The prototype constructor allows you to add new properties and methods to JavaScript booleans

Boolean.prototype.myColor = function() {
  if (this.valueOf() == true) {
    return "green";
  } else {
    return "red";
  }
};

var a = true;
console.log("prototype",a.myColor()); // green