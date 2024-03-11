const obj = {
    a : function() {
        console.log("a", this);
        // function b() {
        //     console.log("b", this);
        // }
        // b();
    },
    b: () => {
        console.log("b", this); 
    }
}

obj.a();
obj.b();