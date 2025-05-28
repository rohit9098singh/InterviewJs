Function.prototype.myApply = function (context = {}, args = []) {
  // Step 1: Handle null or undefined context
  if (context === null || context === undefined) {
    context = globalThis;
  }

  // Step 2: args must be an array
  if (!Array.isArray(args)) {
    throw new TypeError("args should be an array");
  }

  // Step 3: Assign the function (this) as a temporary method on context
  context.fn = this;

  // Step 4: Call the function with spread arguments
  const result = context.fn(...args);

  // Step 5: Clean up the temp function
  delete context.fn;

  // Step 6: Return the result (optional, but correct)
  return result;
};


function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'Akash' };

greet.myApply(person, ['Hello', '!']); // Hello, Akash!
