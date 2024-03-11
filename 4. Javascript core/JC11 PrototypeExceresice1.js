// proper way of doing prototypal inheritance

const person = {
  name: "person",
  setName: function(name) {
    this.name = name;
  }
};

const developer = Object.create(person); // protypal inheritance

console.log(person);
console.log(developer);
console.log(person.isPrototypeOf(developer)); // true
