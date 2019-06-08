// Normal Code Execution


function first(){
  console.log(1);
}
function second(){
  console.log(2);
}

first();
second();


/*

OUTPUT
 1
 2

*/


// Without callback Code Execution


function first(){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
  }, 500 );
}

function second(){
  console.log(2);
}

first();
second();


/*

OUTPUT
 2
 1

*/


// With callback Code Execution

function first(second){
  // Simulate a code delay
  setTimeout( function(){
    console.log(1);
    second()
  }, 500 );
}
function second(){
  console.log(2);
}

first(second);



/*

OUTPUT
 1
 2

*/