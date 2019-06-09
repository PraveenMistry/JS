// Sets or returns an error message (a string)

try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.error(err.message); // adddlert is not defined
}