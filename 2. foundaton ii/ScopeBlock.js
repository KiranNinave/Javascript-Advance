// we can achive block scoping in javascript using es5 or es6 syntaxt ( const and let keywords )

if (true) {
  var a = "var variable"; // can access aywere
  const b = "const varibale"; // only accessable inside the if block, let variables are also works same
}

console.log(a); // it will work
console.log(b); // give an error
