// What is a WeakMap?
// => A WeakMap is a collection of key–value pairs where:

// 1) Keys must be objects
// 2) Values can be anything
// 3) Keys are weakly referenced


const user={name:"Rohit"}
const wm = new WeakMap();
wm.set(user,"logged-in")
console.log(wm)

console.log(wm.set(user))


// What is a WeakSet?
// ==>A WeakSet is a collection of objects only, stored weakly.

const obj1 = {};
const obj2 = {};

const ws = new WeakSet();
ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

// obj1 = null → garbage collected automatically


const abc= ()=>{
    console.log(this.name)
}

abc.call({name:"sankalp"})