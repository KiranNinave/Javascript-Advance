// important : every thing in javascript is object even primitive types are wrap around to the curresponding objects

// Primitive type
console.log(typeof 5); // number
console.log(typeof 5.5); // number
console.log(typeof "hello"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefind
console.log(typeof null); // object
console.log(typeof Symbol("hello")); //symbol

// Non Primitive type
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function() {}); // object note: even it sounds function it is object
