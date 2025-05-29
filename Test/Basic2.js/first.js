//1. Write a function that takes a user's age and determines if they are old enough to vote (age 18 or older).
function canVote(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}

console.log(canVote(20)); 



 // 2.Write a function that takes two numbers as input and determines which one is greater
 const twoNumber=(num1,num2)=>{
     return num1>num2 ? `num1 is greater ${num1}`  :`num 2 is grater ${num2}`
 }

console.log(twoNumber(13,28))


//  3.Write a function that takes a number as input and determines if it is positive or negative.
const checkPositiveNegative=(num)=>{
   return num>=0 ? "postive number" : "negative number"
}

console.log(checkPositiveNegative(12))


// 4.Write a function that takes a number as input and determines if it is even or odd.
 const isEvenOdd = (num) => (num % 2 === 0 ? "Even Number" : "odd Number");
 console.log(isEvenOdd(3))

//  5.Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.
const checkForAlphabetA = (str) => {
  return str.toLowerCase().includes("a")
    ? "Contains 'a' or 'A'"
    : "Does not contain 'a' or 'A'";
};

console.log(checkForAlphabetA("helloA")); 

 // 6.Write a function that takes a string as input and determines if it is longer than 5 characters.

 const determineFiveChar=(str)=>{
    return str.length>5 ? "length is grater then 5" :"length is less ten 5"
 }

 console.log(determineFiveChar("hello brother"))


 ///  8. Write a function that takes a string as input and determines if it contains the word "hello".
 const isHelloPresent=(str)=>{
   const a= str.toLowerCase().split(" ").includes("hello") ? "presnt " :"not present";
   return a
 }

 console.log( isHelloPresent("hello world ")
)


// //  9. Write a function that takes a number as input and determines if it is a multiple of 3.
 const isMultipleOfThree = (num) =>
   num % 3 === 0 ? "Multiple Of three" : "Not multiple of three";

 console.log(isMultipleOfThree(5));


 //  10. Write a function which takes in a number as input and returns it after multiplying by 10.
 const multiplyByTen = (num) => num * 10;
 console.log(multiplyByTen(20));
 console.log(multiplyByTen(40));


 // 11. Console individual values of the product object using object destructuring.
 const product = {
   title: "iPhone",
   price: 5999,
   description: "The iPhone is a smartphone developed by Apple",
 };
 const { title, price, description } = product;
 console.log(title);
 console.log(price);
 console.log(description);

 // // 12. Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages.
 const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180
};

function getBookDetails(book) {
  return book.pages > 100
    ? `${book.title} by ${book.author} has more than 100 pages.`
    : `${book.title} by ${book.author} has 100 pages or less.`;
}

console.log(getBookDetails(book));

// 13. Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.
const person = {
  name: 'Rohit',
  homeTown: "Delhi",
  occupation: "Doctor"
};

const changeOccupation = (person, newOccupation) => {
  person.occupation = newOccupation;
};

console.log("Before change:", person);

changeOccupation(person, "Engineer");

console.log("After change:", person);


// // 15. Convert the given function into ES6 with least amount of characters.
// Function definition with default parameter
const defaultParamsFunc = (a, b, c = 4) => a * b * c;

// Test cases
console.log(defaultParamsFunc(3, 1));        // Output: 12 (c defaults to 4)
console.log(defaultParamsFunc(3, 10));       // Output: 120 (c defaults to 4)
console.log(defaultParamsFunc(3, 10, 2));    // Output: 60 (c = 2)
console.log(defaultParamsFunc(3, 10, null)); // Output: 0  (c = null, treated as 0)
console.log(defaultParamsFunc(3, 10, 0));    // Output: 0  (c = 0)



