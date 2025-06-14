const expensiveFunction = (name, city) => {
  console.log(
    `Expensive operation by ${name} from ${city} at`,
    new Date().toLocaleTimeString()
  );
};

const throttle = (func, delay) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;  
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFunction = throttle(() => expensiveFunction("Rahul", "Delhi"), 300);

window.addEventListener("resize", betterFunction);


// flag initially true hota hai.

// Jab function first time call hota hai, func() chalega aur flag false ho jayega.

// 3 seconds (3000 ms) tak koi aur call allow nahi hogi.

// 3 seconds baad flag phir true ho jayega, aur agla call allowed hoga
