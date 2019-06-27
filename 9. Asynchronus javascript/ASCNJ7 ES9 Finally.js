// by using es9 new feature we can add finaly block to promise

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("resolve");
  } else {
    reject("reject");
  }
});

promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => {
    // finally block didn't recive data
    // finally block allways execute not matter weather it is then or catch
    console.log("finally");
  });
