// map and forEach are both array functions used to loop / iterate over arrays

const arr = [2, 5, 6, 7, 8];

//  Using .map()
// map ek naya array return karta hai
// Har element par callback run hota hai aur jo value return hoti hai, woh new array me store hoti hai
const mapRes = arr.map((ar) => {
  return ar + 2; // har element me 2 add karke new array banayega
});

console.log("map result:", mapRes); 
// Output: [4, 7, 8, 9, 10]

//  Using .forEach()
// forEach sirf iteration ke liye use hota hai
// Yeh koi value return nahi karta, balki har element par sirf callback run karta hai
const forEachRes = arr.forEach((ar) => {
  return ar + 2; // yeh value return hogi, lekin forEach ignore kar dega
});

console.log("forEach result:", forEachRes); 
// Output: undefined — kyunki forEach kuch return nahi karta


// ================= polyfils banate hai ===============
 // Apna khud ka forEach function banate hain
Array.prototype.MyForEach = function (cb) {
  // 'this' current array ko refer karega jisme MyForEach call ho raha hai
  for (let i = 0; i < this.length; i++) {
    // Callback function ko har element, index, aur array ke sath call karte hain
    cb(this[i], i, this);
    // Note: Jo bhi cb return kare, forEach usse ignore karta hai
  }
  // Kuch return nahi karte (undefined by default)
};

const arr2 = [10, 20, 30, 40];

// Custom forEach ka use karte hain
arr2.MyForEach((el, i, arr) => {
  console.log(`Index ${i}: Value ${el}`);
});