// array.copyWithin(target, start, end)


var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log("fruits",fruits);


// Parameter				Description
//target		Required. 	The index position to copy the elements to
//start			Optional. 	The index position to start copying elements from  (default is 0)
//end			Optional. 	The index position to stop copying elements from (default is array.length)