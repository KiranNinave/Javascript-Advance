// Immutibility means not changing state, but making copies of state if need modifing it  and returning new state every time

function clone(object) {
  return { ...object }; // creating clone of object
}

function changeName(object, name) {
  const newObject = clone(object);
  newObject.name = name; // we make changes on clone so orignal object reserved
  return newObject;
}

const myObject = { name: "no name" };
const newObject = changeName(myObject, "kiran");

console.log(myObject, newObject); // orignal object is maintained!
