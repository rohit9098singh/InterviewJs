const p=new Promise((resolve,reject)=>{
    resolve("Promise resolved value");
})

// let suppose my promise takes time to resolve
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value after 5 sec");
    },5000)
})

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved value after 10 sec");
    },10000)
})




// with normal fucntion 
function getData(){
   p.then((res)=>console.log(res))
   p2.then((data)=>console.log(data))
   console.log("i am printing at first or last lets check it out ");
}
getData();



// now we will chek out with async await over here
async function handlePromise(){
  const res=await p;
  console.log(res)

  const res2=await p2; 
  console.log("is here also it is printing first ");
  console.log(res2);


  const res3=await p3; 
  console.log("is here also it is printing second ");
  console.log(res3);
  // even it it had two await it will wait paralley and get resolve nearly at the same time 
}
handlePromise();


// NOTE => if we have two promsie in async fucntion then jo pehla await hoga vo agar 5 sec ke timer pe hai to vo resolve ho jayega 5 sec pe or fir jayega neeche but agr upper walla 10 sec ka hai or neeche walla 5 sec ka then neeche walla bhi 10 sec ke baadh log hota hai