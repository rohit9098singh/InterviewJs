// const arr=[1,2,3,4,5];

// const res=arr.find((value)=>value>1);


// Array.prototype.myFind=function(cb){
//      for(let i=0;i<this.length;i++){
//         if(cb(this[i])){
//             return this[i];
//         }
//      }
// }

// const cb=(value)=>(
//     value >2
// )
// console.log(arr.myFind(cb))



const arr = [1, 2, 3, 4, 5];

Array.prototype.myFind = function (cb) {
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i])) {
            return this[i];
        }
    }
};

function cb(incoming) {
    return incoming > 3;
}

console.log(arr.myFind(cb)); // 4
