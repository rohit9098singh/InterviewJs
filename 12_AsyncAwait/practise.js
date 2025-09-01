async function getData(){
    return "Namaste";
}
// const promiseData=getData();

// promiseData.then((data)=>{
//     console.log(data)
// })

const resu=async ()=>{
const res= await getData()
  console.log(res)
}
resu()

// getData().then((res)=>{
//   console.log(res)
// }).catch((error)=>{console.log(error)})

// console.log(promiseData)

// if i return the promise from the fucntion in that case

// const p=new Promise((resolve,reject)=>{
//     resolve("Promise resolved value")
// })

// async function getData2(){
//      return p;
// }

// const promiseData2=getData().then((data)=>{
//     console.log(data)
// })

async function getData() {
  return "namaste";
}

// const resolvePromsie=async()=>{
//     const result=await getData();
//     console.log(result)
// }

// resolvePromsie();

getData()
  .then((res) => console.log("result", res))
  .catch((err) => {
    console.log(err);
  });
