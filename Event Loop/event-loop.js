console.log("Starting app");

setTimeout(()=>{
	console.log("invoke after 2 sec");
},2000);

setTimeout(()=>{
	console.log("invoke after 0 sec");
},0);

console.log("Finishing up");


// OUTPUT

Starting app
Finishing up
invoke after 0 sec
invoke after 2 sec