// 1. Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];

const totalLength=(arr)=>{
    return arr.reduce((acc,str)=>acc+str.length,0)
}

console.log(totalLength(strings))


// 2. Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
const numbers = [1, 2, 3, 4, 5];

const sumOfSquare=(arr)=>{
    return arr.reduce((acc,curr)=>acc+curr*curr,0)
}

console.log(sumOfSquare(numbers));


// 3. Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 },
];

const calculateTotalValue=(arr)=>{
   return arr.reduce((acc,curr)=>{
      return  acc+ curr.price;
   },0)
}

console.log(calculateTotalValue(items));


// 4. Write an ES6 function that takes an array of strings as input and concatenates them into a single string.
const fruits = ["apple", "banana", "cherry", "mango", "grape"];

const lastSecondFunction = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, "");
};

console.log(lastSecondFunction(fruits)); // Output: "applebananacherrymangogrape"


//5. Write an ES6 function to multiply and return all the elements of a given array.
 const numbers3 = [1, 2, 3, 4, 5];

 const value=(arr)=>{
    return arr.reduce((acc,curr)=>acc*curr)
 }

 console.log(value(numbers3))

 // 6. Write an ES6 function that takes an array of strings and returns the longest string.

const fruits2 = ["apple", "banana", "cherry", "mango", "grape"];

const longestString = (arr) => {
  return arr.reduce((acc, curr) => curr.length > acc.length ? curr : acc, "");
};

console.log(longestString(fruits2)); 

// 7. Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.

const people = [
  { name: "Jeena", age: 25 },
  { name: "Priya", age: 30 },
  { name: "Naina", age: 45 },
];

const mostAge = (arr) => {
  return arr.reduce((acc, curr) => curr.age > acc.age ? curr : acc);
};

console.log(mostAge(people)); 

// 9. Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.
const products = [
  { name: "Bread", price: 10, quantity: 2 },       // Total: 20
  { name: "Clips", price: 20, quantity: 5 },       // Total: 100
  { name: "Knife", price: 30, quantity: 1 },       // Total: 30
  { name: "Slipper", price: 40, quantity: 3 },     // Total: 120 ← Most expensive
];

const mostExpensiveProduct = (arr) => {
  return arr.reduce((acc, curr) =>
    curr.price * curr.quantity > acc.price * acc.quantity ? curr : acc
  );
};

console.log(mostExpensiveProduct(products));


// 10. Write an ES6 function that takes an array of strings and returns an object with the count of each string.
const fruits7 = [
  "apple",
  "banana",
  "banana",
  "cherry",
  "apple",
  "apple",
  "banana",
];
 const countStrings=(fruits)=>{
    return fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc; 
  }, {});
 }

console.log(countStrings(fruits7));


