function divideChunks(arr,n){
   let result=[];
   for(let i=0;i<arr.length;i=i+n){
    let chunks=arr.slice(i,i+n);
     result.push(chunks)
   }
   return result;
}

let arr=[1,2,3,4,5,6,7,8];

console.log(divideChunks(arr,3)) 