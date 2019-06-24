// this property of closure us awesome :}

// wrong solution
function withoutClosure(index) {
  // consider we have large data with continues retrival
  const data = new Array(1000).fill("kiran"); // this thing will execute for every function call this is the problem
  console.log("data retrived again!");
  return data[index];
}

console.log(withoutClosure(1));
console.log(withoutClosure(2));
console.log(withoutClosure(3));

// right solution
function withClosure() {
  // higher order function
  const data = new Array(1000).fill("kiran");
  console.log("data retrived again!");
  return function(index) {
    // this one is closure
    return data[index]; // remembering data ( closure property )
  };
}
const remember = withClosure(); // this one will retive data once and remeber it
console.log(remember(1)); // all other will access data using closure property
console.log(remember(2));
console.log(remember(3));
