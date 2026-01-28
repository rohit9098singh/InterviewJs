(function hello() {
  console.log("hello");
})(); //  iife=> imediately invoked function expreesion

// if we want to execute the fucntion only once in a code then taht case of senario we use the iife fcuntion
// it doesnt polutes the global scope just because evverthing is inside the fucntin itself it has no matter with the other 
// varibles doesnt takes memeory after execution as garbage collector removes automatically once it work is done
// we cannot call it more then once in ouer code

const factorial = function fact(n) {
  if (n <= 1) {
    return 1;
  } else {
    return n * fact(n - 1);
  }
};
console.log(factorial(4));

import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, []); // Empty dependency array means this runs once on mount

  
  return (
    <div>
      <h1>API Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
//  We cannot make the useEffect callback itself async because React expects either nothing or a cleanup function
//  as the return value, not a Promise. Instead, we define an async function inside it (or use an async IIFE) and call it. 
//  This allows us to use await inside useEffect safely

(
  function call(){
    console.log("hello world ")
  }
)()
