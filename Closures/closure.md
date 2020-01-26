## Closure 

#### Share private members
#### In other words, a closure gives you access to an outer function’s scope from an inner function.
#### In JavaScript, closures are created every time a function is created, at function creation time.

### Closure provide privacy pattern, over local variables can be created with var, with function scope as below

`function init() {  
    var name = 'Mozilla'; // name is a local variable created by init  
    function displayName() { // displayName() is the inner function, a closure  
      alert(name); // use variable declared in the parent function  
    }  
    displayName();  
  }  
  init();  
`
  
  
Run the code and notice that the alert() statement within the displayName() function successfully displays the value of the name variable, which is declared in its parent function. This is an example of lexical scoping, which describes how a parser resolves variable names when functions are nested. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Nested functions have access to variables declared in their outer scope.
