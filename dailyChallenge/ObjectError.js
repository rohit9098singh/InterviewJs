let obj = {
  count: 0,
  increment: function () {
    setTimeout(function() {
      console.log(this.count++);
    }, 1000);
  },
};

obj.increment();
obj.increment();

// Inside the setTimeout, you're using a regular function, not an arrow function. 
// So this no longer refers to obj — it refers to the global object (window in browsers), and:
// this.count // is undefined
// this.count++ // becomes NaN (undefined incremented)

// note : how to solve it just change the normal function into the arrow function

