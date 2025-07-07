// let num=[1,2,3,44,44,5,3];

// let uniqure=[];
// for(let i=0;i<num.length;i++){
//     let alreadyExist=false;
//     for(let j=0;j<uniqure.length;j++){
//         if(num[i]===uniqure[j]){
//             alreadyExist=true;
//             break;
//         }
//     }
//     if(!alreadyExist){
//         uniqure.push(num[i])
//     }
// }

// console.log(uniqure)

// //2. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

// let res=[];
// function findEven(arr){
//     for(let i=0;i<arr.length;i++){
//        if(arr[i] %2===0){
//          res.push(arr[i])
//        }
//     }
//     return res

// }
// let num2=[1,2,3,4]
// console.log(findEven(num2))

// console.log(res)

// 3. write a js fucntion that shows wheather a string is palindrom or not

// function validatePalindrom(str){
//     let cleanedStr="";
//     for (let i=0;i<str.length;i++){
//         let char=str[i].toLowerCase();
//         if(char>="a" && char<="z" || char>=0&& char <="9"){
//             cleanedStr+=char;
//         }
//     }
//     let revStr=""
//    for (let i = cleanedStr.length - 1; i >= 0; i--) {
//   revStr += cleanedStr[i];
// }

//     if(cleanedStr===revStr){
//         return true
//     }
//     else{
//         return false
//     }
// }
// const str="madam";
// const res2= validatePalindrom(str)
// console.log(res2)

// show the factorial operation over here

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(65));

// const toFactorial = function fact(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * fact(n - 1);
//   }
// };

// console.log(toFactorial(6));

// 5. Program to find longest word in a given sentence ?

// function toFindLongestString(str) {
//   let splittedString = str.split(" "); // ["this ","is","hello"]
//   let longest = "";
//   for (let i = 0; i < splittedString.length; i++) {
//     if (splittedString[i].length > longest.length) {
//       longest = splittedString[i];
//     }
//   }
//   console.log(longest);
// }

// 6. Write a JavaScript program to find the maximum numberin an array.

// const arr4 = [1, 2, 3, 4, 5];

// function toFindMax(arr) {
//   let longest = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > longest) {
//       longest = arr[i];
//     }
//   }
//   return longest;
// }
// console.log(toFindMax(arr4));

//7. Write a JavaScript function to check if a given number is prime.

// function toCheckForPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return "number is not a prime ";
//     }
//   }
//   return "is a prime "
// }

// console.log(toCheckForPrime(4));

// 8. Program to find Reverse of a string without using built-in method ?

// function toReverse(str){
//     let revStr=""
//     for (let i=str.length-1;i>=0;i--){
//          revStr +=str[i]
//     }
//     return revStr;
// }

// console.log(toReverse("rohit"))

//9. Find the smallest word in a given sentence ?

function toFindSmallestString(str) {
  let splittedString = str.split(" "); // spelling fixed: "spillted" → "splitted"
  let smallestStr = splittedString[0]; // start with the first word

  for (let i = 1; i < splittedString.length; i++) {
    if (splittedString[i].length < smallestStr.length) {
      smallestStr = splittedString[i];
    }
  }

  return smallestStr;
}

console.log(toFindSmallestString("hello my name is Rohit"));

//11. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6));

//12. Find the max count of consecutive 1’s in an array ?
function maxCount(arr){
   let maxCnt=0;
   let currentConstCount=0;
   for(let i=0;i<arr.length;i++){
      if(arr[i]===1){
          currentConstCount +=1;
          maxCnt=Math.max(currentConstCount,maxCnt)
      }
      else{
        currentConstCount=0
      }
   }
   return maxCnt
}

const arr=[1,2,1,1,1,4,5,6,1,1,1,1];
console.log(maxCount(arr))

// 13 Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].Merge them and sort [0,3,4,4,6,30,31] ?

// function mergeSortedArrays(arr1, arr2) {
//   let merged = [];
//   let i = 0;
//   let j = 0;

//   // Compare elements one by one
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] <= arr2[j]) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }

//   // Push remaining items from arr1 (if any)
//   while (i < arr1.length) {
//     merged.push(arr1[i]);
//     i++;
//   }

//   // Push remaining items from arr2 (if any)
//   while (j < arr2.length) {
//     merged.push(arr2[j]);
//     j++;
//   }

//   return merged;
// } 

const merged=(arr1,arr2)=>{
   let merged=[]
   let i=0;
   let j=0;
   let k=0;
   while(i<arr1.length && j<arr2.length){
      if(arr1[i]<=arr2[j]){
        merged.push(arr1[i])
        i++
      }
      else{
        merged.push(arr2[j])
        j++
      }
      while(i<arr1.length){
        merged.push(arr1[i])
        i++
      }
      while(j<arr2.length){
        merged.push(arr2[j])
        j++
      }
    return merged;
   }
}
arr1 = [0, 3, 4, 31]
arr2 = [4, 6, 30]


console.log(mergeSortedArrays(arr1,arr2))


// 14. Create a function which will accepts two arrays arr1 and
// arr2. The function should return true if every value in arr1
// has its corresponding value squared in array2. The
// frequency of values must be same.(Effecient)

// function same(arr1,arr2){
//     if(arr1.length !==arr2.length) return false;
//     let arrFreq1={}
//     let arrFreq2={}

//     for (let val of arr1){
//        arrFreq1[val]=(arrFreq1[val] || 0) +1; 
//     }

//     for (let val of arr2){
//         arrFreq2[val]=(arrFreq2[val] || 0) +1;
//     }

//     for (let key in arrFreq1){
//         let squared=key *  key;
//         if(!squared in arrFreq2){
//             return false
//         }
//         if(arrFreq1(squared) !==arrFreq2[key]){
//             return false;
//         }

//     }
//     return true
// }
// console.log(same([1, 2, 3], [4, 1, 9]));       // ✅ true
// console.log(same([1, 2, 3], [1, 9]));          // ❌ false
// console.log(same([1, 2, 1], [4, 4, 1]));       // ❌ false
// console.log(same([1, 2, 3, 2], [1, 4, 9, 4])); // ✅ true

// 15. Given two strings. Find if one string can be formed by rearranging the letters of other string. (Effecient)
function isStringCreated(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  let freq = {};

  for (let val of str1) {
    freq[val] = (freq[val] || 0) + 1;
  }

  for (let val of str2) {
    if (freq[val]) {
      freq[val] -= 1;
    } else {
      return false;
    }
  }

  return true;
}
console.log(isStringCreated('anagram','nagaram'))

//16. Write logic to get unique aray from below array ?
const arr9 = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(arr9)];
console.log(unique); // [1, 2, 3, 4, 5]

const arr10 = [1, 2, 2, 3, 4, 4, 5];
const unique2 = arr10.filter((val, index) => arr.indexOf(val) === index);
console.log(unique); // [1, 2, 3, 4, 5]

// Useful if interviewer says: "Don't use Set or filter()
let arr11=[1, 2, 2, 3, 4, 4, 5]

const result=[]
const seen={}
for(let i=0;i<arr11.length;i++){
     if(!seen[arr11[i]]){
        result.push(arr11[i])
        seen[arr[i]]=true;
     }
}

console.log(result)

//17. Write logic to get unique object from below array ?
const arr12 = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" }
];

const res=[]
const seenval={}

for (let i=0;i<arr12.length;i++){
     const currentName=arr12[i.name];
     if(!seenval(currentName)){
         res[res.length]=arr12[i]
         seen[currentName]=true
     }

}
console.log(res)

// 17. Write a JavaScript program to find the largest element in a nested array.
function countCharacters(str) {
  const freq = {};
  for (let val of str) {
    freq[val] = (freq[val] || 0) + 1;
  }
  return freq;
}

console.log(countCharacters("hello world"));


// 19. Write a javascript function that sorts an array of
// numbers in ascending order.
function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortAscending([5, 2, 9, 1, 5, 6])); 

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

console.log(sortDescending([5, 2, 9, 1, 5, 6])); 

function bubbleSortAscending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortAscending([5, 2, 9, 1, 5, 6])); 

function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortDescending([5, 2, 9, 1, 5, 6]));

//21. Write a javascript function that reverses the order of
// words in a sentence without using the built-in reverse()
// method.

function reversestring(str){
    const words = str.split(" "); 
    let result = "";
     for (let i = words.length - 1; i >= 0; i--) {
         result += words[i];
         if (i !== 0) result += " ";
     }
       return result;
}

console.log(reverseWords("hello my name is Rohit"));
// 23 Write a function which converts string input into an
// object

function stringToObject(str) {
  const obj = {};

  for (let char of str) {
    obj[val]=(obj[val]||0) +1
  }

  return obj;
}

console.log(stringToObject("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

//24 write a fucntioh that takes an arrya and return new array where everyeleemnt is result and multipleof aage ka 2

function productOfNextTwo(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(i+2 <arr.length){
            result.push(arr[i+1]*arr[i+2]);
        }
        else{
            return result.push(0);
        }
    }
    return res
}

console.log(productOfNextTwo([2, 3, 4, 5, 6]))

// 25. Find the 2nd largest element from a given array ?
// [100,20,112,22]
const arr13 = [100, 20, 112, 22];

let first = -Infinity;
let second = -Infinity;

for (let num of arr13) {
  if (num > first) {
    second = first;
    first = num;
  } else if (num > second && num !== first) {
    second = num;
  }
}

console.log("Second largest:", second);
