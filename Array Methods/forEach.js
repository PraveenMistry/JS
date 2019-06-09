// The forEach() method calls a provided function once for each element in an array, in order. (LOOP)

var numbers = [4, 9, 16, 25];

numbers.forEach(function(number,index) {
  console.log("index",index,"number",number);
});


// OUTPUT

"index" 0 "number" 4 
"index" 1 "number" 9
"index" 2 "number" 16
"index" 3 "number" 25