// Original array
const arr = [1, 2, 3, 4, 5, 60];

// Built-in reduce usage
const reducedArr = arr.reduce((acc, curr, i, arr) => (
    acc + curr
), 0);

// Note:
// reduce function do chiz leta hai:
// 1. Callback function (accumulator, currentValue, index, array)
// 2. Initial value (yaha 0 diya gaya hai)

console.log(reducedArr); // Output: 75

//  Custom reduce polyfill
Array.prototype.MyReduce = function(cb, initialValue) {
    // Step 1: Accumulator ko initialValue se start karte hain
    let accumulator = initialValue;

    // Step 2: Loop karte hain array ke saare elements pe
    for (let i = 0; i < this.length; i++) {
        // Yaha check karte hain ki initialValue diya gaya tha ya nahi
        // Agar initialValue undefined hai, to pehle element ko hi initial maan lete hain
        if (accumulator !== undefined) {
            // Callback ko call karte hain: acc = cb(acc, currentElement, index, array)
            accumulator = cb(accumulator, this[i], i, this);
        } else {
            // Agar initialValue nahi diya gaya tha, to pehla element ko accumulator bana dete hain
            accumulator = this[i];
        }
    }

    // Final result return karte hain
    return accumulator;
};

// Testing MyReduce:
const arr2 = [1, 2, 3, 4, 5, 60];

// MyReduce ka use kar rahe hain, same callback aur initial value ke sath
const reducedArr2 = arr2.MyReduce((acc, curr, i, arr) => (
    acc + curr
), 0);

console.log(reducedArr2); // Output: 75
