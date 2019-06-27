// there are some cases when we want to execute promises in some manner
// parallel -> execute promises parallely and return all
// squence -> execute promises squencially
// race -> return first executed promise ( fastest one)

function returnPromise(message, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve(message);
    }, timeout);
  });
}

// parallel
async function parallel() {
  // this function will execute all promises simultaneously then returns the result
  const result = await Promise.all([
    returnPromise("promise 1", 1000),
    returnPromise("promise 2", 2000),
    returnPromise("promise 3", 3000)
  ]);
  return result;
}
parallel().then(result => console.log("parallel", result));

// sequencial
async function sequencial() {
  // this function will squencialy execute promises and return combine result
  const result1 = await returnPromise("promise 1", 1000);
  const result2 = await returnPromise("promise 2", 2000);
  const result3 = await returnPromise("promise 3", 3000);
  return [result1, result2, result3];
}
sequencial().then(result => console.log("squencial", result));

// race
async function race() {
  // this function will return promise that execute fastes other are ignored!
  const result = await Promise.race([
    returnPromise("promise 1", 1000),
    returnPromise("promise 2", 2000),
    returnPromise("promise 3", 3000)
  ]);
  return result;
}
race().then(result => console.log("race", result));
