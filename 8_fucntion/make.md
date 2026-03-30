

**Q1. What will be the output and why?**

```js
console.log(a());
console.log(b());

function a() {
  return "A";
}

var b = function () {
  return "B";
};
```

* Explain hoisting behavior.
* Explain memory creation phase vs execution phase.

---

### 2️⃣ Named Function Expression Edge Case

```js
var x = function test() {
  console.log(typeof test);
};

x();
console.log(typeof test);
```

* Why does this behave differently inside vs outside?
* Where is `test` stored?

---

### 3️⃣ Arrow vs Normal Function – `this`

```js
const obj = {
  value: 10,
  regular: function () {
    return this.value;
  },
  arrow: () => {
    return this.value;
  }
};

console.log(obj.regular());
console.log(obj.arrow());
```

* Why?
* What is lexical `this`?
* Where does arrow function get `this` from?

---

### 4️⃣ First Class Function

Explain:

* Why JS functions are first-class citizens?
* Give 3 practical examples.
* What internal property allows this?

---

### 5️⃣ Higher Order Function (HOF)

Write a custom implementation of:

```js
function customMap(arr, cb) { }
```

Edge cases:

* Sparse arrays
* `thisArg`
* Non-array input

---

### 6️⃣ Callback vs HOF

Explain difference with example.

---

### 7️⃣ Currying

Write:
```
function base(val1){
  return child(val2){
     return child3(val3){
      return val1+val2+val3
     }
  }
}
sum(1)(2)(3) 
```

Then answer:

* How does closure help here?
* Where are previous values stored?

---

### 8️⃣ Infinite Currying

```js
sum(1)(2)(3)(4)() // 10
```

* How do you detect termination?
* What if someone does `sum(1)()()`?

---

### 9️⃣ IIFE + Scope

```js
(function () {
  var a = b = 5;
})();

console.log(b);
console.log(a);
```

* Why?
* What happened to `b`?
* Which scope was polluted?

---

# 🔥 SECTION 2: Hoisting + TDZ + Lexical Scope

---

### 🔟 Hoisting Deep Dive

```js
console.log(a);
var a = 10;

console.log(b);
let b = 20;
```

* Why does one give undefined and other ReferenceError?
* Define Temporal Dead Zone precisely.

---

### 1️⃣1️⃣ TDZ Trap

```js
let x = 10;

{
  console.log(x);
  let x = 20;
}
```

* Explain step by step execution.

---

### 1️⃣2️⃣ Lexical Scope + Closure Trap

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```

* Output?
* Why?
* Fix using:

  * let
  * IIFE
  * bind

---

### 1️⃣3️⃣ Closure Memory Question

```js
function outer() {
  let counter = 0;

  return function inner() {
    counter++;
    console.log(counter);
  };
}

const fn = outer();
fn();
fn();
fn();
```

* Why is `counter` not garbage collected?
* What keeps it alive?

---

# 🔥 SECTION 3: map, filter, reduce – Internal Mechanics

---

### 1️⃣4️⃣ Predict Output

```js
const arr = [1, 2, 3, 4];

const result = arr
  .map(x => x * 2)
  .filter(x => x > 4)
  .reduce((acc, val) => acc + val, 0);

console.log(result);
```

---

### 1️⃣5️⃣ Edge Case – Sparse Array

```js
const arr = [1, , 3];

arr.map(x => console.log(x));
```

* What gets printed?
* Why?

---

### 1️⃣6️⃣ Reduce Edge Case

```js
[].reduce((acc, val) => acc + val);
```

* What happens?
* Why?
* How to fix?

---

### 1️⃣7️⃣ Implement reduce manually

```js
function customReduce(arr, cb, initialValue) {}
```

Edge cases:

* No initial value
* Empty array
* Non-array input

---

# 🔥 SECTION 4: Promises + Microtasks + Event Loop

---

### 1️⃣8️⃣ Basic Promise Order

```js
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");
```

* Exact output?
* Explain call stack, microtask queue, macrotask queue.

---

### 1️⃣9️⃣ Promise Chain Trap

```js
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw new Error("error") })
  .then(x => console.log(x))
  .catch(err => console.log("caught"))
  .then(() => console.log("after catch"));
```

* Output?
* Why does execution continue?

---

### 2️⃣0️⃣ Promise + setTimeout Combo

```js
setTimeout(() => console.log("A"), 0);

Promise.resolve()
  .then(() => console.log("B"))
  .then(() => setTimeout(() => console.log("C"), 0));

console.log("D");
```

* Exact order?

---

### 2️⃣1️⃣ Create Your Own Promise

Implement minimal version of:

```js
function MyPromise(executor) {}
```

Requirements:

* store state
* support then
* async resolve

---

### 2️⃣2️⃣ Promise.all Edge Case

What happens if:

```js
Promise.all([
  Promise.resolve(1),
  Promise.reject("fail"),
  Promise.resolve(3)
])
```

* Does 3 execute?
* Why?

---

# 🔥 SECTION 5: Advanced Conceptual Grill

---

### 2️⃣3️⃣ Explain Execution Context Creation Phase

* Variable Environment
* Lexical Environment
* Scope Chain
* `this` binding

---

### 2️⃣4️⃣ What is the difference between:

* Execution Context
* Call Stack
* Memory Heap

---

### 2️⃣5️⃣ What is Garbage Collection in JS?

* Mark and sweep algorithm
* How closures affect memory

---

### 2️⃣6️⃣ What happens internally when you call a function?

---

### 2️⃣7️⃣ Why is `typeof null === "object"`?

---

### 2️⃣8️⃣ Explain:

* Shallow copy
* Deep copy
* structuredClone
* JSON clone limitation

---

# 🚨 BONUS: Trick Questions

---

### 2️⃣9️⃣

```js
console.log(0.1 + 0.2 === 0.3);
```

Why?

---

### 3️⃣0️⃣

```js
console.log([] + []);
console.log([] + {});
console.log({} + []);
```

Explain coercion.


