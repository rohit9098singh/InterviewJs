// Map hamesha same length ka naya array return karta hai.
const arr = [1, 2, 3, 4, 5];

const result = arr.map(num => num < 3);

console.log(result);
// Output: [true, true, false, false, false]


// filter ka use check karo 
const arr2 = [1, 2, 3, 4, 5];

const result2 = arr2.filter(num => num !== 3);

console.log("help",result2);
// Output: [1, 2, 3, 4, 5]

// 0, null, undefined, false, NaN, "" → falsy

let student1={
    firstName:"rohit",
    lastName:"singh"
}
function printName(thirdparams){
    console.log(this.firstName,this.lastName,thirdparams)
}

printName.call(student1,"hello")







// let package = {
//  version: "2.0",
// };
// let application = Object.create(package, {
//  name: { value: "game" },
// }); // inherited from package

// console.log(application.name);
// console.log("check wheather it is equal or not",Object.getPrototypeOf(application)===package);



let package={
    version:"2.0"
}

let application=Object.create(package,{
    name:{value:"game"}
})
console.log(application.version);

console.log("check wherther it is equal or not ",Object.getPrototypeOf(application)=== package)

let a = 3;
let b = new Number(3);
let c = 3;
console.log(a == b);
console.log(a === b);
console.log(b === c);