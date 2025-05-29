// 1.Write a function to calculate sum of n elements

const sumOfElement=(arr,n)=>{
    return arr.slice(0,n).reduce((acc,curr)=>acc+curr,0)
}

const number=[1,2,3,4,55,6];
console.log(sumOfElement(number,4))

//2.write a function which will take an array of "n" numbers as an argument and will return the object containing maximum number, minimum number and avg of all numbers in array.

const nextFunction=(arr)=>{
    const max=Math.max(...arr);
    const min=Math.min(...arr);
    const avg=arr.reduce((acc,curr)=>acc+curr,0)/arr.length;

    return {max,min,avg};
}

const num=[1,2,3,4,5,6]

console.log(nextFunction(num))

//3 Given an array of numbers, write a function that returns the sum of all the even numbers.

const fourthFunction=(arr)=>{
     const result=arr.filter((value)=>value%2==0).reduce((acc,curr)=>acc+curr,0);
     return result;
}

const arr4=[1,2,3,4,5,6,7,8]
console.log(fourthFunction(arr4));

//4 Given an array of numbers, write a function that returns the difference between the largest and smallest numbers.

const fifthFunction=(arr)=>{
    const max=Math.max(...arr)
    const min=Math.min(...arr);
    return max-min
}

const arr5=[1,2,3,4,5,6,7,8];

console.log(fifthFunction(arr5));

//Given an array of objects representing people, where each object has a name property and an age property, write a function that returns the name of the oldest person.

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
  { name: "David", age: 35 },
];

const sixthFucntion=(arr)=>{
    const oldest=arr.reduce((acc,curr)=>curr.age > acc.age ? curr :acc);
    return oldest.name
}
console.log(sixthFucntion(people));