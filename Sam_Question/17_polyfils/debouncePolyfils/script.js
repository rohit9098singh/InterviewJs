let count = 0;

const getData = (hello) => {
    console.log(`fetching data...${count++} form ${hello}`);
}

const doSomeMagic = function(fn, delay) {
    let timer;
    return function() {
        let context = this;
         let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}

const betterFunction = doSomeMagic(getData, 300);
betterFunction("rohit");
betterFunction("ankit");
betterFunction("sachin");




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

