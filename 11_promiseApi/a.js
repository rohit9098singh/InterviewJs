// let str="hello\nworld";
// // console.log(str)
// let str="hello world welcome to my channel story";

// function breakStr(str){
//     let string=str.split(" ");
//     for(let i=0;i<string.length;i++){
//          console.log(string[i]);
//     }
// }
// breakStr(str);


// const arr=[1,2,3,4,5,6,7];
// Array.prototype.myMap=function (cb){
//     let newArray=[];
//     for(let i=0;i<this.length;i++){
//     newArray.push(cb(this[i]));
//     }
//     return newArray
// }

// function cb(incommingValue){
//     return incommingValue *2;
// }

// console.log(arr.myMap(cb))


//  let i=0;
//  let n=10
// while(i<n){
//     if( i===2 || i===5){
//         i++
//         continue;
//     }
//     else{
//         console.log(i)
//     }
//     i++
// }



// let a=[1,2,3,4,5]
// const res=a;
// console.log(res)

// let name="rohit"
// console.log(`hello this is ${name}`)

// const arr=[3,4,5,6,7,8]
// Array.prototype.myFilter=function(){
//     let newArray=[];
//     for(let i=0;i<this.length;i++){
//          if(cb(this[i])){
//             newArray.push(this[i])
//          }
//     }
//     return newArray;
// }
// function cb(incommingValue){
//     return incommingValue >2;
// }
// console.log(arr.myFilter(cb))

const arr=[1,2,3,4,5];
// Array.prototype.myReduce=function (cb,initialValue){
//     let index=0
//     if(initialValue === undefined){
//        initialValue=this[0];
//        index=1;
//     }
//     for(let i=index;i<this.length;i++){
//          initialValue=cb(initialValue,this[i])
//     }
//     return initialValue
// }

// console.log(arr.myReduce((acc,curr)=>acc+curr,0))

Array.prototype.myFind=function (cb){
   for(let i=0;i<this.length;i++){
    if(cb(this[i])){
         return this[i]
    }
   }
}
function cb(incommingValue){
  return incommingValue.id===2
}
console.log([{id:1,name:"Rohit"},{id:2,name:"Rishu"}].myFind(cb))


function CheckClosure(){
    let a=10;
    return function(){
        console.log(a)
    }
}

const res=CheckClosure();
res();