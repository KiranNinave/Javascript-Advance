// Imperative: tells the computer what to do and how to do
// Declarative: tells the computer what to do and what should happend ( it didn't tell how to do)

// imperative example
for (var i = 0; i < 10; i++) {
  // this one is imperative because we are giving to much instructions, like start from here, end here, and increment by one
  console.log(i);
}

// declarative example
[1, 2, 3, 4, 5].map(item => console.log(item)); // this is declarative we only tell to loop through item not to how to do it
