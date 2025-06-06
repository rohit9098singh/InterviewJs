// Can you demonstrate the usage of async/await with error handling in an asynchronous function? How would you handle multiple asynchronous calls that need to be executed sequentially and others in parallel?

// 1. Using async/await with Error Handling

async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    console.log("Data:", data);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// 2. Handling Multiple Async Calls: Sequential vs Parallel

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "rohit" });
    }, 1000);
  });
}

function fetchPost(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`post of ${user.name}`);
    }, 1500);
  });
}

function sendAnalytics(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Analytics sent for:", data);
      resolve("Analytics complete");
    }, 500);
  });
}

async function processUserData() {
  try {
    const user = await fetchUser();
    const post = await fetchPost(user);
    const result = await sendAnalytics(post);
    return result; 
  } catch (error) {
    console.log("Error in processUserData:", error);
    throw error; 
  }
}

processUserData()
  .then((res) => console.log("Final Result:", res))
  .catch((e) => console.log("Caught error:", e));


// B. Parallel Execution (All at Once)

const task1=()=>{
   return new Promise((res,rej)=>{
        setTimeout(() => {
            res("task1 is done ")
        }, 1000);
    })
}
const task2=()=>{
   return new Promise((res,rej)=>{
        setTimeout(() => {
            res("task2 is done ")
        }, 1000);
    })
}
const task3=()=>{
  return  new Promise((res,rej)=>{
        setTimeout(() => {
            res("task3 is done ")
        }, 1000);
    })
}

async function runInParallel(){
    console.time("Parallel");
    const [r1,r2,r3]=await Promise.all([task1(),task2(),task3()]);
    console.log(r1,r2,r3)
    console.timeEnd("Parallel")
}
runInParallel();