// console.log('A');

// setTimeout(() => {
//   console.log('B');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('C');
// });

// console.log('D');


// // second question

// async function foo() {
//   return 42;
// }

// console.log(foo());

//Q3. Identify the issue and output:
async function test() {
  const result = await Promise.resolve("Done!");
  return result;
}

test().then(console.log); // You're passing the function reference, not calling it

console.log("After test()");

