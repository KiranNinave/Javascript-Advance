const array = ["a", "b", "c"];

const arrayLikeObject = {
  0: "a",
  1: "b",
  2: "c"
};

// in javascript above two are same thing
// but the arrays come with some special properties with them

//we can diffrenciate arrays with object usiing es5's isArray method

console.log(Array.isArray(array)); //true

console.log(Array.isArray(arrayLikeObject)); // false
