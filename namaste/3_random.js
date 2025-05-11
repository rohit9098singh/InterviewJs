function suffleRandom(arr){
   let result=[...arr];
   for(let i=result.length-1;i>0;i--){
       const j=Math.floor(Math.random()*i+1);
       [result[i],result[j]]=[result[j],result[i]];
   }
   return result;
}

let arr=[1,2,3,4,5,6,7,8];
console.log(suffleRandom(arr));
