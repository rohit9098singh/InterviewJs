// You have 3 async functions: task1(), task2(), and task3()—each returns a promise and takes 1 second.
// Write two functions:

// runInParallel - runs all 3 in parallel and logs total time.

// runInSequence - runs all 3 in sequence and logs total time.

// (Hint: Use console.time() and console.timeEnd())

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

