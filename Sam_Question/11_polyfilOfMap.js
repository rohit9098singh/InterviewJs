// polyfills for map function   

    const arr=[1,2,3,4];
    let newArr=arr.map((el,i,arr)=>{
      return el*2;
    })
    console.log(newArr)

//polyfil
  
// map function ka polyfill (custom implementation)
Array.prototype.MyMap = function (cb) {
  let temp = []; // ek empty array banate hain jisme modified values store karenge

  // 'this' yaha pe us array ko refer karega jispe MyMap call ho raha hai
  for (let i = 0; i < this.length; i++) {
    // callback function ko har element, uska index, aur original array ke sath call karte hain
    const modifiedValue = cb(this[i], i, this);

    // callback se return hua value temp array me push karte hain
    temp.push(modifiedValue);
  }

  // final modified array return karte hain
  return temp;
};


// 🔹 Step-by-Step Explanation:
// Array.prototype.MyMap:

// Humne ek naya method banaya MyMap naam ka jo har array me available ho jayega.

// Parameters of cb:

// Callback function ko map() ki tarah 3 parameters milte hain: element, index, original array.

// Loop (for loop):

// Har element ke liye callback function call karte hain.

// Jo value return hoti hai usse ek naye array me daal dete hain (temp).

// Return:

// Jab loop khatam ho jata hai, final array return kar dete hain

const arr2 = [1, 2, 3, 4];
let newArr2 = arr.MyMap((el, i, arr) => {
  return el * 2;
});

console.log(newArr2); 