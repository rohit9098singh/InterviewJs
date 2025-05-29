const arr=[1,2,3,4,5,6,7,8];

// arr.reduce((acc,curr)=>{},0)


Array.prototype.myReduce=function(cb,initialValue){
    let index=0;
    if(initialValue=== undefined){
        initialValue=this[0];
        index=1;
    }
    for(let i=index;i<this.length;i++){
          initialValue=cb(initialValue,this[i]);
    }
    return initialValue;
}

console.log(arr.myReduce((acc,curr)=>acc+curr,5))


// Array.prototype.myReduce = function (callback, initalvalue) {
//     let index = 0;
//     if (initalvalue === undefined) {
//         initalvalue = this[0];
//         index = 1
//     }
//     for (let i = index; i < this.length; i++) {
//         initalvalue = callback(initalvalue, this[i])
//     }

//     return initalvalue
// }


// const arr = [1, 2, 3, 4, 5];
// const sum = arr.myReduce((acc,val)=>acc+val, 3)
// console.log(sum)