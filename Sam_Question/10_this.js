// 1. Global context
console.log(this); 
// In browser: logs `window`
// In Node.js: logs an empty object `{}` or global object

// 2. Regular function
function hello() {
    console.log(this); 
    // In non-strict mode: logs `window` (browser) or `global` (Node)
    // In strict mode: `undefined`
}

hello();

// 3. Object with arrow function
const obj = {
    name: "rohit",
    class: 2,
    greet: () => {
        console.log(this); 
        // `this` here does NOT refer to `obj`
        // It refers to the outer lexical context (`window` or `global`)
        
        console.log(this.name); 
        // undefined, because `this` is not pointing to `obj`
    }
};

obj.greet();

// 4. Object with regular method (for comparison)
const obj2 = {
    name: "rohit",
    class: 2,
    greet() {
        console.log(this); 
        // `this` refers to obj2

        console.log(this.name); 
        // logs "rohit"
    }
};

obj2.greet();
