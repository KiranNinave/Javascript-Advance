// indempotent is same as pure function but we interact with outside world
// for same input indempotent function return same output but we effect or interact with outside world

function IndempotentFunction(num) {
  console.log(num); // this function always produce same output for same input but it affect outside world
}

IndempotentFunction(5);

// indempontent function are very usefull when we retrving data from api and we accept same kind of data
