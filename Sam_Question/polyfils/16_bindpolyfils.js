let name = {
  firstName: "Akshay",
  lastName: "saini"
};

let printName = function (city) {
  console.log(`${this.firstName} ${this.lastName} from ${city}`);
};

// Native bind usage
let printMyName = printName.bind(name, "Delhi");
printMyName(); // Akshay saini from Delhi

//  Polyfill for bind
Function.prototype.myBind = function (...args) {
  // this => points to the function on which bind is called (here, printName)
  let obj = this;

  //first elememt ko hata ke baki sare ko dena bind time pe
  let params = args.slice(1); // bind-time arguments (like "Delhi")

  // return a new function (delayed execution)
  return function (...args2) {
    // call-time args (if any) are added to bind-time args
    obj.apply(args[0], [...params, ...args2]); // apply helps pass 'this' and arguments as array
  };
};

// ✅ Using custom myBind
let printMyName2 = printName.myBind(name, "Delhi");
printMyName2(); // Akshay saini from Delhi
