let person1={
    name:"Akash",
}

let person2={
    name:"John",
}

function printAge(age){
    console.log(`${this.name} is ${age} years old`)
}

printAge.call(person1,25)

// polyfils for call

// Step 1: Add our custom method to Function.prototype
Function.prototype.myCall = function (context = {}, ...args) {
  // 'this' yaha pe us function ko refer karega jisko myCall ke through call kiya ja raha hai

  // Step 2: Agar context null ya undefined diya hai, to usse global object (window / globalThis) bana do
  if (context === null || context === undefined) {
    context = globalThis;
  }

  // Step 3: Us function ko context ke andar ek temporary property bana ke assign karo
  // kyunki function call tabhi uss object ke context me hoga
  context.fn = this;

  // Step 4: Function ko execute karo with passed arguments
  const result = context.fn(...args);

  // Step 5: Clean-up: function ko object se hata do
  delete context.fn;

  // Step 6: Agar function kuch return karta hai to usse return karo (optional for call)
  return result;
};
