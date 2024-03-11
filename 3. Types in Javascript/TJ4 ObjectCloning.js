// in java script the object, arrays and function are the object type so it will get pass by reference
// so in case of copying object we have certain methods

// copying array
const a = [1, 2, 3, 4, 5];
const b = [].concat(a);
const c = [...a]; // cloning using spread operator
b.push(6);
c.push(6);
console.log(a); // didn't effect orignal array
console.log(b);
console.log(c);

//copying object
const obj1 = { a: "a", b: "b" };
const obj2 = Object.assign({}, obj1);
const obj3 = { ...obj1 }; // cloning using spread operator
obj2.c = "c";
obj3.c = "c";
console.log(obj1); // didn't effect orignal object
console.log(obj2);
console.log(obj3);

// deep cloning
// the only problem with above example is that it only works with 1 level if object have nestested object inside it, then it will not work
// we can deep clone object using json method

const complexObject = {
  a: "a",
  b: {
    c: "c"
  }
};

const complexObjectClone = JSON.parse(JSON.stringify(complexObject)); // this may have performace issues for large objects , so for large objects go with another way
complexObjectClone.b.c = "b";
console.log(complexObject);
console.log(complexObjectClone);
