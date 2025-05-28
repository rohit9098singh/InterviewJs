let count = 0;

const getData = () => {
    console.log("fetching data...", count++);
}

const doSomeMagic = function(fn, delay) {
    let timer;
    return function() {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
            fn()
        }, delay);
    };
}

const betterFunction = doSomeMagic(getData, 300);



// let count = 0;

// const getData = () => {
//   console.log("fetching data...", count++);
// };

// const debounce = (func, delay) => {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func(); // no apply, no args
//     }, delay);
//   };
// };

// const betterFunction = debounce(getData, 300);

// window.addEventListener("resize", betterFunction);

