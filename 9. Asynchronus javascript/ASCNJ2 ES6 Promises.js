// the promises are the es6 feature

// what is promise?
// A promise is an object that may produce single value sometime in the future
// and that value may resolve or rejected
// promise have three posible state
// resolve
// rejected
// pending
// note: promise are asynchronus
// promise are resolve or rejects only once not twice

// promise are added in es6 so before that people use callback function solve problems , but now promise made things easy

// in promise we can chain multiple callbacks using then

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("resolve");
  } else {
    reject("reject"); // rejects and error are handled by catch
  }
});

promise
  .then(result => {
    return result + " added something!"; // if we return something then it will add to resolve object
  })
  .then(result => {
    // throw Error; // errors are handle by catch
    console.log(result); // output reolve added something! ( because first then return something that get added!  )
  })
  .then(result => {
    console.log(result); // undefind ( because second then not returning anything!)
    // this is how we can chain the promises
  })
  .catch(error => {
    console.log("error", error);
  });
