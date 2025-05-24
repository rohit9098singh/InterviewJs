function throttle(func, delay) {
  let lastCalled = 0;
  let lastResult; // stores last return value

  return function (...args) {
    const now = Date.now();

    if (now - lastCalled >= delay) {
      lastCalled = now;
      lastResult = func.apply(this, args); 
    }

    return lastResult; 
  };
}


const throttledFn = throttle(() => console.log('Function called!'), 1000);
throttledFn()
throttledFn()
throttledFn()
throttledFn()
throttledFn()