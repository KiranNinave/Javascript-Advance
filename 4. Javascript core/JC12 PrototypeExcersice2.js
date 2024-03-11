// adding new method to date object
Date.prototype.lastYear = function() {
  // we are making changes in protype so it will affect all the objects that going to use this later on
  return this.getFullYear() - 1;
};
const date = new Date();
console.log(date.lastYear());

// modify map method of array
Array.prototype.map = function() {
  // we are making changes in protype so it will affect all the objects that going to use this later on ( note: here we overide method)
  const arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(this[i] + " modified!");
  }
  return arr;
};
var array = [1, 2, 3];
console.log(array.map());
