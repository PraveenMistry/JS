// Sets or returns an error name


try {
  adddlert("Welcome guest!");
}
catch(err) {
  console.error(err.name); // ReferenceError
}