// problem example

const obj = {
  func: function() {
    console.log(this); // op : obj
    function anotherFunc() {
      console.log(this); // op : global object ( beacase :  this function is not called by any refernce so it created own lexical environment )
    }
    anotherFunc(); // function get called by global scope
  }
};

obj.func();

// solution

const solObj = {
  func: function() {
    console.log(this); // op : obj
    var anotherFunc = () => {
      console.log(this); // op : obj ( beacase : arrow functions maintain the binding )
    };
    // or
    // function anotherFunc () {
    //   console.log(this); // op : obj ( beacase : arrow functions maintain the binding )
    // };
    // anotherFunc = anotherFunc.bind(this);
    anotherFunc();
  }
};

solObj.func();
