async function showFunction(){
    return "hello"
}
console.log("first value",showFunction())

async function showFunction2(){
     while(true){
        await 1
     }
}
console.log("check out here ",showFunction2());

async function showFunction3(){
    throw "Rejected without using new Promise "
}

console.log("third value at here ",showFunction3())

//three ways to create a promsie without using new Promise

// 1 => using async fucntion

async function myPromiseFunction() {
    return "Resolved with new Promise"
}

async function callMyPromise(){
    const res=await myPromiseFunction();
    console.log(res)
}

callMyPromise();

// 2 method Using Promise.resolve() or Promise.reject()
const resolved = Promise.resolve(" Immediate resolve");
const rejected = Promise.reject(" Immediate reject");


resolved.then((res)=>console.log(res));
rejected.catch((res)=>console.log(res));


//3Use a real API
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log("✅ Fetched:", data))
  .catch(error => console.error("❌ Error:", error));


