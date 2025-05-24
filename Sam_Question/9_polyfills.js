// 👇 Polyfill (sirf tab chalega jab includes method available nahi ho)
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}

const numbers = [10, 20, 30, 40];

console.log(numbers.includes(20)); //  true → kyunki 20 array me hai
console.log(numbers.includes(99)); //  false → kyunki 99 nahi hai

// 1)if (!Array.prototype.includes)

//     Array.prototype.includes matlab check kar rahe hain:
// "Kya arrays mein .includes() naam ka method hai?"

// Agar nahi hai (false), tab aage ka code chalega.


// Line 2–4:
// Array.prototype.includes = function (value) {
//   return this.indexOf(value) !== -1;
// };

// Array.prototype.includes = function (value)
// → Ye .includes() ka naya version define kar raha hai.

// this.indexOf(value) !== -1
// → Array ke andar value hai ya nahi check karta hai using indexOf().

// 🔁 indexOf() agar value milta hai to index deta hai (e.g. 0, 1, 2...).
// Agar nahi milta to -1 deta hai.