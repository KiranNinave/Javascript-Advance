// in javascript rather than main thread we have worker thread runing in backgound

// we can use worker thread in ourprograme usning Worker class
const worker = new Worker();

// in broweser the worker thread is manage by browser
// in node the worker thread is managed by node

// in javascript we can maintain concurrency using asnc functionality

// in javascript browser we can't do parallel programming for muliprocessor

// in node we can do parallel programming usnig libuv
const { spawn } = require("child_process"); // this is one of the way to use multiprocessor in node (parallel plogramming)
console.log(spawn);
