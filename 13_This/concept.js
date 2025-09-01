const student = {
  name: "rohit",
  place: "jharkhand",
  greet: () => {
    console.log(`hello ${this.name} welcome today for the interview`);
  }
};

student.greet(); // ❌ undefined
// Arrow functions don’t have their own this binding. They capture this from their surrounding lexical scope.
//  Objects don’t create a lexical scope, so inside an arrow function method, this does not refer to the object

const student2 = {
  name: "rohit",
  place: "jharkhand",
  wrapper() {
    const greet = () => {
      console.log(`hello ${this.name} welcome today for the interview`);
    };
    greet();
  }
};

// In this case, the arrow function greet is defined inside the regular function wrapper. 
// Arrow functions don’t have their own this, so they inherit this from their lexical scope.
//  Since wrapper is a regular function and is invoked as a method of the object, its this refers to the object (student2). 
// Therefore, the arrow function inherits this from wrapper, and is able to access this.name correctly.
student2.wrapper(); // ✅ hello rohit welcome today for the interview