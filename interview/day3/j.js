var count = 1
const a = ()=>{
  console.log(++count)
}

const b = ()=>{
  let x = 5
  function name() {
    console.log("HEllo")
  }
  return name
}

a();
a();
a();
b()();

// if([]){
//     console.log("Hello coder")
// }

Array.prototype.myFilter=function(cb){
    let newArray=[]
    for (let index = 0; index < this.length; index++) {
         if( cb(this[index],index,this)){
            newArray.push(this[index])
         }
    }
    return newArray
}

const arr=[1,2,3,4,5,6];
console.log(arr.myFilter((val,index,arr)=>{
    return arr
}))




