// let a=[1,2,[3,4]];

// let copy=[...a];

// copy[2][0]=1000;

// console.log(a)
// console.log(copy)

// function add(a){
//     a[0]=20000;
//     console.log(a)
// }

// let a=[10,20];
// add(a);
// console.log(a)


const arr=[1,2,[3,4]];



const copy=JSON.parse(JSON.stringify(arr))
const struc=structuredClone(arr)

struc[2][0]=10000;
console.log(arr);
console.log(struc)


