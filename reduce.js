let sum=0;
for(let i=1;i<10;i++){
    sum=sum+i
}
console.log(sum)

const  arr=[1,2,3,4,5,6];
let a=arr.reduce((acc,curr)=>{
    return acc+curr
},0)
console.log(a)