// The prototype constructor allows you to add new properties and methods to the Date() object

Date.prototype.myMet = function() {
  if (this.getMonth() == 0){this.myProp = "January"};
  if (this.getMonth() == 1){this.myProp = "February"};
  if (this.getMonth() == 2){this.myProp = "March"};
  if (this.getMonth() == 3){this.myProp = "April"};
  if (this.getMonth() == 4){this.myProp = "May"};
  if (this.getMonth() == 5){this.myProp = "June"};
  if (this.getMonth() == 6){this.myProp = "July"};
  if (this.getMonth() == 7){this.myProp = "August"};
  if (this.getMonth() == 8){this.myProp = "September"};
  if (this.getMonth() == 9){this.myProp = "October"};
  if (this.getMonth() == 10){this.myProp = "November"};
  if (this.getMonth() == 11){this.myProp = "December"};
};


var d = new Date();
d.myMet();
console.log("myProp",d.myProp); // June