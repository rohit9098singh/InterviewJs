async function getData(){
    return "Namaste";
}
const promiseData=getData();

promiseData.then((data)=>{
    console.log(data)
})

console.log(promiseData)


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