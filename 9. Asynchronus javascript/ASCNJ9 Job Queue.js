// the job queue is es6 javascript feature
// job queue - microtask queue
// callback queue - task queue
// the job queue are implemented in browser

// note: the job queue have higher priority than callback queue
// priorities : call stack -> job queue -> web api -> callback queue

// promise are es6 feature , so beacuse of promises are async in nature they introduce job queue in es6
// promises are store on job queue

setTimeout(function() {
  console.log("callback queue call");
}, 0);

Promise.resolve("job queue call").then(result => console.log(result));

console.log("stack call");

// output:
// stack call
// job queue call
// callback queue call
