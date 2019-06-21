function one(){
	var a=1;
	console.log(a);
}

function two(){
	var a=2;
	console.log(a);
}

one(); // 1
two(); // 2
console.log(a); //Uncaught ReferenceError: a is not defined
    			// at <anonymous>:13:13
