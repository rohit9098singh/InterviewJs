const student = {
  name: "rohit",
  place: "jharkhand",
  greet: () => {
    console.log(`hello ${this.name} welcome today for the interview`);
  }
};

student.greet(); // ❌ undefined
// Its lexical scope is the global scope because the arrow function is defined directly inside the object, and from the arrow function's point of view, the object is not considered its lexical parent."

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

// In this case, the arrow function greet is defined inside the regular function wrapper. Arrow functions don’t have their own this, so they inherit this from their lexical scope. Since wrapper is a regular function and is invoked as a method of the object, its this refers to the object (student2). Therefore, the arrow function inherits this from wrapper, and is able to access this.name correctly.
student2.wrapper(); // ✅ hello rohit welcome today for the interview