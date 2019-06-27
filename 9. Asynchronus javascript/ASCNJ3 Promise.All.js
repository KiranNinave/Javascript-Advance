// promise.all ( []) method combine the promises
// but there are certain conditions
// all promise must be finished execution in order to return result
// if any promise failed (rejects or case error) then all the promises are rejected and result handled by catch

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve 1");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve 2");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolve 3");
  }, 3000);
});

const promise4 = new Promise((resolve, reject) => {
  //setTimeout(resolve("resolve 4"), 4000);
  setTimeout(() => {
    resolve("reject 4");
  }, 4000);
  // setTimeout(() => {
  //   reject("reject 4");
  // }, 4000);
  // if we add above code all the promises will get rejected
});

Promise.all([promise1, promise2, promise3, promise4])
  .then(result => {
    // it will returns results when all the promises finishe execution
    console.log(result); // returns array of results
  })
  .catch(error => {
    console.log(error); // catch any error hapends insides all promises
  });
