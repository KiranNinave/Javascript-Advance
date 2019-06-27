// handling errors in async await is litle different and easy than promises

async function errorFunction() {
  try {
    await Promise.reject("rejected");
    console.log("i am working!"); // this will not work because error is generated
  } catch (error) {
    console.log(error);
  }
  console.log("i am also working!"); // this will work
}

errorFunction();
