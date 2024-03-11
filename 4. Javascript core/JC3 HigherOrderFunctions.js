// higher order function (HOF) means function acepting onother function as parameter or returning function as parameter

function giveAccessTo(name) {
  return "access to " + name;
}

function authenticate(name, time) {
  // image time as authentication checkes for indivisual users
  for (var i = 0; i <= time; i++) {
    // perform checks
  }
  return giveAccessTo(name);
}

function loginPerson(person, fn) {
  // this one is higher order function
  if (person.type == "admin") {
    return fn(person.name, 50000); // cosider admin have more checks than user
  } else if (person.type == "user") {
    return fn(person.name, 10000);
  }
  return false;
}

console.log(loginPerson({ type: "user", name: "kiran" }, authenticate));
