// how does javascript works?

// what is a program?
// program is a something that allowcate the memory and parse and execute

// javascript engin
// contains two things
// memory heap (where data is stored)
// call stack ( where program get executed , it tells where are you in program)

// what is synchronus programming?
// synchronus programming means code get executed line by line only one stack is avalible we cant create more than one stack

// javascript runtime environment ?
// javascript runtime environment is come with like javascript engine in browser
// javascript runtime environment contians
// web api
// callback queue
// event loop

// how javascript does asynchronus?
// javascript does asynchronus using callback functions and wep apis

// asynchronus working of javascript
// whenever any asynchronus function (ex: setTimeout) is get called it handle by web apis
// if that function event is get completed( like completing setTimeout counter) javascript post the callback function to callback queue
// the event loop is something that continuesly run and check for stack to get empty
// when stack get empty event loop post the callback function to the stack

// somethings that handled by web apis
// dom events(listners)
// timeout function (setTimeout, setIntervel)
// AJAX requests (fetch)

// some events that handled by callback queue's
// onClick
// onLoad
// onDone

// how dom events and listeners works (like button clicked) ?
// when we create listener ( like element.addEventListner('click',callback function ) , the listener is get added to web apis
// when perticular event occures ( click event ) then the callback function is get posted to callback queue
// then event loop checks for call stack to get empty , when call stack become empty it post the callback function from callback queue to call stack
// then the function is get executed! :)
