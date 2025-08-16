// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Array.prototype.myMap = function(cb) {
//   let newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cb(this[i]));
//   }
//   return newArr;
// };

// function cb(value) {
//   return value * 2;
// }

// const result = arr.myMap(cb);

// console.log(result); // [2, 4, 6, 8, 10, 12, 14, 16]



const arr=[1,2,3,4,5];

Array.prototype.myMap=function (cb){
  let newArray=[];
  for(let i=0;i<this.length;i++){
      newArray.push(cb(this[i]))
  }
  return newArray;
}

function cb(incommingValue){
  return incommingValue *2
}

console.log(arr.myMap(cb))