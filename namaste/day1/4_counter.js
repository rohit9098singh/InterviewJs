function makeCounter(initialValue = 0) {
    let currentValue = initialValue;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => (currentValue = initialValue)
    };
}


const counter=makeCounter(5)
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());