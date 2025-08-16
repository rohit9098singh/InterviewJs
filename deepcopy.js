const obj = { a: 1, b: { c: 2 } };

const deepCopy = structuredClone(obj);

const deepCopy2 = JSON.parse(JSON.stringify(obj));

deepCopy.b.c = 99;

console.log(obj.b.c);
console.log(deepCopy.b.c); // 99

let a=[1,2,[3,4]]
const deepClone=JSON.parse(JSON.stringify(a))